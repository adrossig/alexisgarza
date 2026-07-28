import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Portfolio — Alexis Garza",
  description:
    "Selected residential, hospitality, and retail interior design projects by Alexis Garza.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-5 pb-10 pt-14 md:px-10 md:pt-20 lg:px-20">
        <p className="label-caps text-accent">Portfolio</p>
        <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-[-0.02em] md:text-7xl">
          Selected Works
        </h1>
        <p className="mt-8 max-w-xl text-lg font-light text-muted">
          A close look at recent homes and spaces — each one led end to end, from first
          sketch to final styling.
        </p>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pb-20 md:px-10 lg:px-20">
        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2">
          {projects.map((p) => (
            <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/Image.png"
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="img-grade object-cover transition duration-500 group-hover:scale-[1.02]"
                />
                <span className="grain" />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <span className="font-display text-2xl transition group-hover:text-accent">
                  {p.name}
                </span>
                <span className="whitespace-nowrap text-sm font-light text-muted">
                  {p.place} · {p.year}
                </span>
              </div>
              <p className="label-caps mt-2 text-accent">{p.category}</p>
              <p className="mt-3 font-light leading-relaxed text-muted">{p.summary}</p>
              <span className="link-gold label-caps mt-4 inline-block">View project</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
