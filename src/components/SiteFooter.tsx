import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-footer">
      <div className="mx-auto max-w-[1440px] px-5 py-10 md:px-10 lg:px-20">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="font-display text-2xl uppercase tracking-[0.35em] text-accent"
            >
              Alexis Garza
            </Link>
            <p className="mt-4 max-w-xs text-sm font-light text-muted">
              Creating sophisticated environments that balance Latin warmth with modern
              precision.
            </p>
          </div>

          <div>
            <p className="label-caps text-muted">Connect</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a className="link-gold text-sm" href="https://instagram.com" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a className="link-gold text-sm" href="https://pinterest.com" target="_blank" rel="noreferrer">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="label-caps text-muted">Company</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link className="link-gold text-sm" href="/philosophy">
                  Philosophy
                </Link>
              </li>
              <li>
                <Link className="link-gold text-sm" href="/inquire">
                  Inquire
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="label-caps mt-8 !font-normal !tracking-[0.15em] text-muted">
          © {new Date().getFullYear()} Alexis Garza Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
