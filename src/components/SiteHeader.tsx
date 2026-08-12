"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/inquire", label: "Inquire" },
];

function isActive(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [renderedPath, setRenderedPath] = useState(pathname);

  // A completed navigation — including back/forward — should never leave the
  // panel hanging open. Adjusted during render rather than in an effect.
  if (renderedPath !== pathname) {
    setRenderedPath(pathname);
    setOpen(false);
  }

  // Escape is the expected way out of an open panel.
  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-30 border-b border-foreground/10 bg-background/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="shell flex items-center justify-between py-6"
      >
        <Link
          href="/"
          aria-label="Alexis Garza — home"
          className="font-display text-2xl uppercase tracking-[0.35em]"
        >
          Alexis Garza
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-10 md:flex">
          {links.slice(0, 2).map((link) => {
            const active = isActive(pathname, link.href);

            return (
              <li key={link.href} className="relative">
                {active && (
                  <span
                    aria-hidden
                    className="absolute -top-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold"
                  />
                )}
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`label-caps transition-colors hover:text-accent ${
                    active ? "text-accent" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/inquire"
          aria-current={isActive(pathname, "/inquire") ? "page" : undefined}
          className="label-caps hidden bg-foreground px-6 py-3 text-background transition-colors hover:bg-accent md:inline-block"
        >
          Inquire
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
          className="-mr-2 flex h-11 w-11 cursor-pointer items-center justify-center md:hidden"
        >
          <span aria-hidden className="relative block h-4 w-6">
            <span
              className={`absolute left-0 block h-px w-6 bg-foreground transition-transform duration-300 ${
                open ? "top-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-px w-6 bg-foreground transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-6 bg-foreground transition-transform duration-300 ${
                open ? "top-1/2 -rotate-45" : "top-full"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-foreground/10 md:hidden">
          <ul className="shell flex flex-col py-2">
            {links.map((link) => {
              const active = isActive(pathname, link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`label-caps block border-b border-foreground/10 py-5 transition-colors ${
                      active ? "text-accent" : "text-foreground hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
