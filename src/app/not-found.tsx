import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[60svh] flex-col justify-center py-20">
      <p className="label-caps text-accent">Error 404</p>
      <h1 className="mt-6 max-w-2xl font-display text-5xl font-semibold leading-[1.05] tracking-[-0.02em] md:text-7xl">
        This room doesn&apos;t exist.
      </h1>
      <p className="mt-8 max-w-md font-light leading-relaxed text-muted">
        That page moved, or it never existed. The work is still here.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/portfolio"
          className="label-caps bg-foreground px-8 py-4 text-background transition-colors hover:bg-accent"
        >
          View the portfolio
        </Link>
        <Link
          href="/"
          className="label-caps border border-foreground px-8 py-4 text-gold transition-colors hover:bg-foreground hover:text-background"
        >
          Back home
        </Link>
      </div>
    </section>
  );
}
