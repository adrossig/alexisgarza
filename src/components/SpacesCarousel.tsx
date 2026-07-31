"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { projectImage } from "@/data/projects";

type Space = {
  name: string;
  material: string;
  image?: string;
};

/** Slide geometry per source-photo shape, so nothing is cropped hard. */
const SLIDE_STYLES = {
  portrait: {
    figure: "w-[78vw] md:w-[42vw] lg:w-[34vw]",
    frame: "aspect-[3/4] md:aspect-[4/5]",
    sizes: "(max-width: 768px) 78vw, (max-width: 1024px) 42vw, 34vw",
  },
  landscape: {
    figure: "w-[86vw] md:w-[58vw] lg:w-[46vw]",
    frame: "aspect-[4/3] md:aspect-[3/2]",
    sizes: "(max-width: 768px) 86vw, (max-width: 1024px) 58vw, 46vw",
  },
} as const;

/** Per-frame velocity decay after the pointer is released. */
const FRICTION = 0.94;
/** Below this px/frame the glide is imperceptible, so we stop. */
const MIN_VELOCITY = 0.08;
/** Weight of the newest sample when smoothing drag velocity. */
const VELOCITY_SMOOTHING = 0.75;

export default function SpacesCarousel({
  spaces,
  orientation = "landscape",
}: {
  spaces: Space[];
  orientation?: keyof typeof SLIDE_STYLES;
}) {
  const slide = SLIDE_STYLES[orientation];
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, lastX: 0, velocity: 0, moved: 0 });
  const glideFrame = useRef<number | null>(null);

  const stopGlide = useCallback(() => {
    if (glideFrame.current !== null) {
      cancelAnimationFrame(glideFrame.current);
      glideFrame.current = null;
    }
  }, []);

  useEffect(() => stopGlide, [stopGlide]);

  // Coast to a stop after release, killing the glide at either edge.
  const startGlide = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;

    function step() {
      const velocity = drag.current.velocity;
      if (!track || Math.abs(velocity) < MIN_VELOCITY) {
        glideFrame.current = null;
        return;
      }

      const next = track.scrollLeft + velocity;
      track.scrollLeft = next;
      drag.current.velocity =
        next <= 0 || next >= maxScroll ? 0 : velocity * FRICTION;

      glideFrame.current = requestAnimationFrame(step);
    }

    glideFrame.current = requestAnimationFrame(step);
  }, []);

  // Scroll by one slide, measured from the first child so gap changes stay in sync.
  function scrollBy(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;

    stopGlide();
    const firstSlide = track.firstElementChild as HTMLElement | null;
    const step = firstSlide ? firstSlide.offsetWidth + 24 : track.clientWidth;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  // Click-and-drag panning. Touch is left to the browser's native scrolling.
  function onPointerDown(event: React.PointerEvent<HTMLDivElement>) {
    const track = trackRef.current;
    if (!track || event.pointerType === "touch") return;

    stopGlide();
    drag.current = { active: true, lastX: event.clientX, velocity: 0, moved: 0 };
    track.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const track = trackRef.current;
    if (!track || !drag.current.active) return;

    event.preventDefault();
    const delta = event.clientX - drag.current.lastX;
    drag.current.lastX = event.clientX;
    drag.current.moved += Math.abs(delta);

    track.scrollLeft -= delta;
    drag.current.velocity =
      -delta * VELOCITY_SMOOTHING + drag.current.velocity * (1 - VELOCITY_SMOOTHING);
  }

  function endDrag(event: React.PointerEvent<HTMLDivElement>) {
    const track = trackRef.current;
    if (!track || !drag.current.active) return;

    drag.current.active = false;
    if (track.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }
    if (drag.current.moved > 2) startGlide();
  }

  return (
    <>
      <div className="mx-auto flex max-w-[1440px] items-end justify-between gap-6 px-5 md:px-10 lg:px-20">
        <h2 className="font-display text-4xl font-medium md:text-5xl">Spaces.</h2>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Previous space"
            className="flex h-11 w-11 items-center justify-center border border-foreground/30 transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Next space"
            className="flex h-11 w-11 items-center justify-center border border-foreground/30 transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onWheel={stopGlide}
        className="bleed-track mt-10 flex cursor-grab touch-pan-y select-none gap-6 overflow-x-auto overscroll-x-contain pb-2 will-change-scroll active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {spaces.map((space, i) => (
          <figure key={space.name} className={`shrink-0 ${slide.figure}`}>
            <div className={`relative overflow-hidden ${slide.frame}`}>
              <Image
                src={projectImage(space.image)}
                alt={space.name}
                fill
                sizes={slide.sizes}
                draggable={false}
                className="img-grade object-cover"
              />
              <span className="grain" />
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between gap-6">
              <span className="label-caps text-muted">
                {String(i + 1).padStart(2, "0")}
                {" // "}
                {space.name}
              </span>
              <span className="label-caps text-right text-muted">{space.material}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
