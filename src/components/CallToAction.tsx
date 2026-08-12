import Link from "next/link";

/** Closing band that ends every long page on the same next step. */
export default function CallToAction({
  heading,
  primary = { href: "/inquire", label: "Start an inquiry" },
  secondary = { href: "/portfolio", label: "See more work" },
}: {
  heading: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="border-t border-foreground/10 bg-card">
      <div className="shell py-16 text-center md:py-20">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-medium leading-tight md:text-5xl">
          {heading}
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href={primary.href}
            className="label-caps bg-foreground px-8 py-4 text-background transition-colors hover:bg-accent"
          >
            {primary.label}
          </Link>
          <Link
            href={secondary.href}
            className="label-caps border border-foreground px-8 py-4 text-gold transition-colors hover:bg-foreground hover:text-background"
          >
            {secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
