import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SpacesCarousel from "@/components/SpacesCarousel";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found — Alexis Garza" };
  }

  return {
    title: `${project.name} — Alexis Garza`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <article>
      {/* Hero — full-bleed image with overlaid title, intro, and specs */}
      <section className="relative h-[62vh] min-h-[460px] w-full overflow-hidden">
        <Image
          src="/Image.png"
          alt={project.name}
          fill
          priority
          sizes="100vw"
          className="img-grade object-cover"
        />
        <span className="grain" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-[1440px] px-5 pb-10 md:px-10 md:pb-12 lg:px-20">
            <div className="grid items-end gap-8 md:grid-cols-3 md:gap-16">
              <div className="md:col-span-2">
                <p className="label-caps text-accent">
                  {project.category} / {project.place}
                </p>
                <h1 className="mt-3 font-display text-5xl font-semibold leading-[1.02] tracking-[-0.02em] md:text-7xl">
                  {project.name}.
                </h1>
                <p className="mt-5 max-w-lg font-light leading-relaxed text-muted">
                  {project.intro}
                </p>
              </div>

              <dl className="md:pb-2">
                {project.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-baseline justify-between gap-6 border-t border-foreground/15 py-3 last:border-b"
                  >
                    <dt className="label-caps text-muted">{fact.label}</dt>
                    <dd className="label-caps text-right">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy — copy left, image right */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20 lg:px-20">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div className="md:pt-8">
            <h2 className="max-w-sm font-display text-4xl font-medium leading-tight md:text-5xl">
              {project.philosophyTitle}
            </h2>
            <div className="mt-8 max-w-md space-y-5 font-light leading-relaxed text-muted">
              {project.philosophyBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Link href="/philosophy" className="link-gold label-caps mt-10 inline-block text-accent">
              Read full manifesto →
            </Link>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/Image.png"
              alt={`${project.name} — detail`}
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="img-grade object-cover"
            />
            <span className="grain" />
          </div>
        </div>
      </section>

      {/* The palette — tonal band */}
      <section className="bg-card">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20 lg:px-20">
          <div className="text-center">
            <p className="label-caps text-accent">The Palette</p>
            <h2 className="mt-4 font-display text-4xl font-medium md:text-5xl">
              {project.paletteTitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Hero material still */}
            <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[420px]">
              <Image
                src="/Image.png"
                alt={`${project.name} — materials palette`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="img-grade object-cover"
              />
              <span className="grain" />
            </div>

            <div className="grid gap-6 md:grid-rows-[auto_1fr]">
              <div className="grid gap-6 sm:grid-cols-2">
                {project.materials.map((material) => (
                  <figure key={material} className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/Image.png"
                      alt={material}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="img-grade object-cover"
                    />
                    <span className="grain" />
                    <figcaption className="label-caps absolute bottom-3 left-3 bg-foreground/80 px-3 py-1.5 text-background">
                      {material}
                    </figcaption>
                  </figure>
                ))}
              </div>

              <div className="bg-card-low p-8 md:p-10">
                <h3 className="font-display text-2xl md:text-3xl">
                  {project.hardware.title}
                </h3>
                <p className="mt-4 max-w-sm font-light leading-relaxed text-muted">
                  {project.hardware.body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spaces carousel */}
      <section className="py-16 md:py-20">
        <SpacesCarousel spaces={project.spaces} />
      </section>

      {/* Next-step CTA */}
      <section className="border-t border-foreground/10 bg-card">
        <div className="mx-auto max-w-[1440px] px-5 py-16 text-center md:px-10 lg:px-20">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-medium leading-tight md:text-5xl">
            Imagining something like this?
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/inquire"
              className="label-caps bg-foreground px-8 py-4 text-background transition-colors hover:bg-accent"
            >
              Start an inquiry
            </Link>
            <Link
              href="/portfolio"
              className="label-caps border border-foreground px-8 py-4 text-gold transition-colors hover:bg-foreground hover:text-background"
            >
              See more work
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
