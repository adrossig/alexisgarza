"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

  return (
    <header className="sticky top-0 z-30 border-b border-foreground/10 bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-6 md:px-10 lg:px-20">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-display text-2xl uppercase tracking-[0.35em]"
        >
          Alexis Garza
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-10 md:flex">
          {links.slice(0, 2).map((link) => (
            <li key={link.href} className="relative">
              {isActive(pathname, link.href) && (
                <span className="absolute -top-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold" />
              )}
              <Link
                href={link.href}
                className={`label-caps transition hover:text-accent ${
                  isActive(pathname, link.href) ? "text-accent" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/inquire"
          className="label-caps hidden bg-foreground px-6 py-3 text-background transition-colors hover:bg-accent md:inline-block"
        >
          Inquire
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="relative block h-4 w-6">
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
        <div className="border-t border-foreground/10 md:hidden">
          <ul className="mx-auto flex max-w-[1440px] flex-col px-5 py-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`label-caps block border-b border-foreground/10 py-4 !text-sm transition ${
                    isActive(pathname, link.href)
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
