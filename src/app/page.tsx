import Image from "next/image";
import Link from "next/link";
import CallToAction from "@/components/CallToAction";
import { ArrowDown, ArrowRight } from "@/components/icons";
import { projectImage, projects } from "@/data/projects";

const feature = projects[0];
const secondary = projects.slice(1, 3);

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[68svh] min-h-[460px] w-full">
          <Image
            src="/Image.png"
            alt="A warm, light-filled living room with bouclé furniture and terracotta floors"
            fill
            priority
            sizes="100vw"
            className="img-grade object-cover"
          />
          <span className="grain" />
          {/* Washes the image far enough for dark type to stay legible on any crop */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/20 md:via-background/35 md:to-transparent" />
          <div className="absolute inset-0">
            <div className="shell flex h-full flex-col justify-center">
              <h1 className="max-w-2xl font-display text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-foreground md:text-7xl">
                Sculpting Space with Tactile Warmth
              </h1>
              <p className="mt-6 max-w-md text-base font-light leading-relaxed text-foreground/90 md:text-lg">
                We create environments that are deeply intentional, blending the raw
                beauty of artisanal heritage with uncompromising modern precision.
              </p>
              <Link
                href="/portfolio"
                className="group on-image label-caps mt-10 inline-flex w-fit items-center gap-3 py-2 text-foreground"
              >
                Discover our work
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="shell py-16 md:py-20 lg:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="label-caps text-accent">Our Philosophy</p>
            <h2 className="mt-6 font-display text-4xl font-medium leading-tight md:text-5xl">
              Sophisticated
              <br />
              Artisanship
            </h2>
            <p className="mt-6 max-w-md font-light leading-relaxed text-muted">
              We believe spaces should evoke the quiet, expensive feeling of a private
              gallery. Our approach favors the hand-crafted and the organic, curated
              with a rigorous editorial standard. We avoid the sterile in favor of rich
              color washes and generous volumes of light.
            </p>
            <Link
              href="/philosophy"
              className="label-caps mt-8 inline-block border border-foreground px-7 py-4 text-gold transition-colors hover:border-accent hover:bg-foreground hover:text-background"
            >
              Read the manifesto
            </Link>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden md:-mt-12">
            <Image
              src="/Image.png"
              alt="Detail of hand-crafted textiles and natural materials"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="img-grade object-cover"
            />
            <span className="grain" />
          </div>
        </div>
      </section>

      {/* Curated Spaces */}
      <section className="border-t border-foreground/10 bg-card">
        <div className="shell py-16 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="label-caps text-accent">Selected Works</p>
              <h2 className="mt-4 font-display text-4xl font-medium md:text-5xl">
                Curated Spaces
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="group label-caps inline-flex items-center gap-3 py-2 text-gold"
            >
              All {projects.length} projects
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-12">
            {/* Feature */}
            <Link
              href={`/portfolio/${feature.slug}`}
              className="group relative block overflow-hidden md:col-span-7"
            >
              <div className="relative aspect-[4/5] w-full sm:aspect-[16/12]">
                <Image
                  src={projectImage(feature.images?.card)}
                  alt={feature.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="img-grade object-cover transition duration-500 group-hover:scale-[1.02]"
                />
                <span className="grain" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-background">
                  <p className="label-caps">
                    {feature.category} · {feature.place}
                  </p>
                  <p className="mt-2 font-display text-3xl">{feature.name}</p>
                </div>
              </div>
            </Link>

            {/* Stacked secondary — rows share the feature's height, however many there are */}
            <div className="grid auto-rows-fr gap-6 md:col-span-5">
              {secondary.map((project) => (
                <Link
                  key={project.slug}
                  href={`/portfolio/${project.slug}`}
                  className="group relative block overflow-hidden"
                >
                  <div className="relative aspect-[16/10] w-full md:aspect-auto md:h-full">
                    <Image
                      src={projectImage(project.images?.card)}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="img-grade object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                    <span className="grain" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/65 via-foreground/15 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-5 text-background">
                      <p className="label-caps label-caps-xs">
                        {project.category} · {project.place}
                      </p>
                      <p className="mt-1 font-display text-xl">{project.name}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CallToAction heading="Have a space in mind? Let's talk about it." />
    </>
  );
}
