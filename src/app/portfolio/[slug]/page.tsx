import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CallToAction from "@/components/CallToAction";
import { ArrowLeft, ArrowRight } from "@/components/icons";
import SpacesCarousel from "@/components/SpacesCarousel";
import { getProject, projectImage, projects } from "@/data/projects";
import { imageAspect } from "@/lib/imageSize";

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

  // The photography mixes upright and wide frames within a single project, so
  // the big editorial frames take their ratio from the file rather than from a
  // per-project setting.
  const heroSrc = projectImage(project.images?.hero);
  const paletteSrc = projectImage(project.images?.palette);

  // Wrap around, so the sequence never dead-ends on the first or last project.
  const index = projects.findIndex((p) => p.slug === project.slug);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const facts = (
    <dl>
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
  );

  return (
    <article>
      <nav aria-label="Breadcrumb" className="shell pt-8">
        <Link
          href="/portfolio"
          className="group label-caps inline-flex items-center gap-2 py-2 text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          All projects
        </Link>
      </nav>

      {/* Hero — one layout for every project. A full-bleed band would show only a
          slice of an upright frame, so the image always sits beside the copy and
          keeps the ratio it was shot at. */}
      <section className="shell pt-6 md:pt-8">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 lg:gap-20">
          <div
            className="relative overflow-hidden"
            style={{ aspectRatio: imageAspect(heroSrc) }}
          >
            <Image
              src={heroSrc}
              alt={project.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 48vw"
              className="img-grade object-cover"
            />
            <span className="grain" />
          </div>

          <div className="flex flex-col justify-end md:pb-2">
            <p className="label-caps text-accent">
              {project.category} / {project.place}
            </p>
            <h1 className="mt-3 font-display text-5xl font-semibold leading-[1.02] tracking-[-0.02em] md:text-7xl">
              {project.name}.
            </h1>
            <p className="mt-5 max-w-lg font-light leading-relaxed text-muted">
              {project.intro}
            </p>
            <div className="mt-10">{facts}</div>
          </div>
        </div>
      </section>

      {/* Philosophy — copy left, image right */}
      <section className="shell py-16 md:py-20">
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
            <Link
              href="/philosophy"
              className="group link-gold label-caps mt-10 inline-flex items-center gap-2 text-accent"
            >
              Read full manifesto
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={projectImage(project.images?.detail)}
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
        <div className="shell py-16 md:py-20">
          <div className="text-center">
            <p className="label-caps text-accent">The Palette</p>
            <h2 className="mt-4 font-display text-4xl font-medium md:text-5xl">
              {project.paletteTitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Lead material still — same frame on every project, sized to the
                photograph so nothing is cut away */}
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: imageAspect(paletteSrc) }}
            >
              <Image
                src={paletteSrc}
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
                  <figure key={material.name} className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={projectImage(material.image)}
                      alt={material.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="img-grade object-cover"
                    />
                    <span className="grain" />
                    <figcaption className="label-caps absolute bottom-3 left-3 bg-foreground/80 px-3 py-1.5 text-background">
                      {material.name}
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
        <SpacesCarousel spaces={project.spaces} orientation={project.orientation} />
      </section>

      {/* Project-to-project navigation */}
      <nav aria-label="Project" className="border-t border-foreground/10">
        <div className="shell grid gap-px sm:grid-cols-2">
          <Link
            href={`/portfolio/${previous.slug}`}
            className="group flex flex-col gap-2 py-8 sm:pr-8"
          >
            <span className="label-caps inline-flex items-center gap-2 text-muted">
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Previous
            </span>
            <span className="font-display text-2xl transition-colors group-hover:text-accent">
              {previous.name}
            </span>
          </Link>
          <Link
            href={`/portfolio/${next.slug}`}
            className="group flex flex-col gap-2 border-t border-foreground/10 py-8 sm:items-end sm:border-l sm:border-t-0 sm:pl-8 sm:text-right"
          >
            <span className="label-caps inline-flex items-center gap-2 text-muted">
              Next
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="font-display text-2xl transition-colors group-hover:text-accent">
              {next.name}
            </span>
          </Link>
        </div>
      </nav>

      <CallToAction heading="Imagining something like this?" />
    </article>
  );
}
