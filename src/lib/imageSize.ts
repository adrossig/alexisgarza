import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Intrinsic size of an image in `public/`, read straight from its header.
 *
 * Project pages are prerendered, so this runs at build time only — it lets a
 * frame follow the photograph it holds instead of forcing every photo into one
 * hard-coded ratio. Kept dependency-free: the studio ships JPEG and PNG, and
 * both encode their dimensions in a few bytes near the start of the file.
 */

type Size = { width: number; height: number };

/** Ratio used when a file can't be measured, matching the studio's wide crop. */
const FALLBACK: Size = { width: 3, height: 2 };

const cache = new Map<string, Size>();

function readPng(buffer: Buffer): Size | undefined {
  // IHDR is always the first chunk: 8-byte signature, 8-byte chunk header, then w/h.
  if (buffer.length < 24 || buffer.readUInt32BE(0) !== 0x89504e47) return undefined;

  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

function readJpeg(buffer: Buffer): Size | undefined {
  if (buffer.length < 4 || buffer.readUInt16BE(0) !== 0xffd8) return undefined;

  let offset = 2;

  while (offset + 9 < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    const marker = buffer[offset + 1];
    const length = buffer.readUInt16BE(offset + 2);

    // SOF0-SOF15 carry the frame size; SOF4/SOF8/SOF12 are not frame headers.
    const isFrameHeader =
      marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker);

    if (isFrameHeader) {
      return {
        height: buffer.readUInt16BE(offset + 5),
        width: buffer.readUInt16BE(offset + 7),
      };
    }

    offset += 2 + length;
  }

  return undefined;
}

/** Measure an image referenced by its public path, e.g. `/projects/a/b.jpg`. */
export function imageSize(publicPath: string): Size {
  const cached = cache.get(publicPath);
  if (cached) return cached;

  let size = FALLBACK;

  try {
    const buffer = readFileSync(join(process.cwd(), "public", publicPath));
    size = readPng(buffer) ?? readJpeg(buffer) ?? FALLBACK;
  } catch {
    // A missing or unreadable file shouldn't break the page — fall back instead.
  }

  cache.set(publicPath, size);
  return size;
}

/** CSS `aspect-ratio` value for an image in `public/`. */
export function imageAspect(publicPath: string): string {
  const { width, height } = imageSize(publicPath);
  return `${width} / ${height}`;
}
