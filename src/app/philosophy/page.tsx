import type { Metadata } from "next";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Philosophy — Alexis Garza",
  description:
    "Contemporary Latin design ethos — interiors rooted in raw, sun-drenched warmth balanced with European precision.",
};

const process = [
  {
    n: "01",
    title: "Discovery",
    body: "Understanding the soul of the space and the client's vision. We delve deep into lifestyle, aspirations, and the architectural context.",
  },
  {
    n: "02",
    title: "Concept",
    body: "Translating narratives into tangible materials. Developing a fluid editorial layout of space, selecting tactile materials and tonal palettes.",
  },
  {
    n: "03",
    title: "Execution",
    body: "Rigorous curation and exacting implementation. Overseeing the artisanal craftsmanship to ensure the final space is quiet, expensive, and intentional.",
  },
];

const awards = [
  { name: "Architectural Digest", detail: "2023 / Feature" },
  { name: "Elle Decor", detail: "2022 / Designer of the Year" },
  { name: "Dezeen Awards", detail: "2021 / Interior Project Longlist" },
  { name: "Vogue Living", detail: "2020 / Emerging Talent" },
];

const press = [
  {
    name: "Architectural Digest",
    title: "The New Vanguard of Latin American Minimalism",
    date: "October 2023",
  },
  {
    name: "Elle Decor",
    title: "How Alexis Garza is Redefining Warmth in Modern Spaces",
    date: "August 2023",
  },
  {
    name: "Vogue Living",
    title: "Inside the Sun-Drenched Studio of the Year",
    date: "May 2023",
  },
];

export default function PhilosophyPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-5 pb-16 pt-14 text-center md:pt-20">
        <p className="label-caps text-accent">Our Philosophy</p>
        <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-[-0.02em] md:text-6xl">
          Contemporary Latin Design Ethos.
        </h1>
        <p className="mx-auto mt-8 max-w-xl font-light leading-relaxed text-muted">
          Rooted in the raw, sun-drenched warmth of Latin heritage, balanced
          with the precision of European minimalism. We create spaces that are
          deeply tactile, intentional, and profoundly human.
        </p>
      </section>

      {/* Sophisticated Artisanship + quote — tonal layer */}
      <section className="bg-card">
        <div className="shell py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <h2 className="font-display text-4xl font-medium leading-tight">
                Sophisticated
                <br />
                Artisanship.
              </h2>
              <div className="mt-6 max-w-md space-y-4 font-light leading-relaxed text-muted">
                <p>
                  The essence of our studio is built on the belief that luxury
                  is found in the handcrafted and the organic. We eschew the
                  sterile in favor of rich color washes, generous whitespace,
                  and textures that invite touch.
                </p>
                <p>
                  Every project is treated as a curated private gallery — quiet,
                  expensive, and deeply intentional. We bridge the gap between
                  architectural rigor and emotional resonance.
                </p>
              </div>
              <div className="relative mt-10 aspect-[4/3] overflow-hidden">
                <Image
                  src="/Image.png"
                  alt="Sketches and material samples on a studio desk"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="img-grade object-cover"
                />
                <span className="grain" />
              </div>
            </div>

            <div className="md:pt-16">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/alexis_garza.jpg"
                  alt="Alexis Garza in the studio"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="img-grade object-cover"
                />
                <span className="grain" />
              </div>
            </div>
          </div>

          {/* Pull quote */}
          <figure className="mx-auto mt-16 max-w-3xl text-center md:mt-20">
            <span className="font-display text-6xl leading-none text-accent">
              &rdquo;
            </span>
            <blockquote className="mt-2 font-display text-3xl italic leading-snug md:text-4xl">
              Alexis Garza doesn&apos;t just design rooms: they curate
              experiences. Our home now feels like a living gallery of our
              heritage and future.
            </blockquote>
            <figcaption className="label-caps mt-8 text-accent">
              Elena R., Madrid
            </figcaption>
          </figure>
        </div>
      </section>

      {/* The Process */}
      <section className="shell py-16 md:py-20">
        <div className="text-center">
          <h2 className="font-display text-4xl font-medium md:text-5xl">
            The Process
          </h2>
          <span className="mx-auto mt-6 block h-px w-16 bg-accent" />
        </div>
        <div className="mt-12 grid gap-12 md:grid-cols-3">
          {process.map((step, i) => (
            <div
              key={step.n}
              className={`text-center ${i === 1 ? "md:mt-16" : ""}`}
            >
              <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-card font-display text-2xl text-accent">
                {step.n}
              </span>
              <h3 className="label-caps mt-6">{step.title}</h3>
              <p className="mx-auto mt-4 max-w-xs font-light leading-relaxed text-muted">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Recognition & Awards — tonal layer */}
      <section className="bg-card">
        <div className="shell py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <h2 className="font-display text-4xl font-medium leading-tight">
                Recognition &amp;
                <br />
                Awards.
              </h2>
              <p className="mt-6 max-w-sm font-light leading-relaxed text-muted">
                Our commitment to bridging Latin warmth with modernist restraint
                has been recognized by leading architectural and design
                publications globally.
              </p>
            </div>
            <ul>
              {awards.map((award) => (
                <li
                  key={award.name}
                  className="flex items-center justify-between gap-6 border-t border-foreground/10 py-6 last:border-b"
                >
                  <span className="font-display text-xl">{award.name}</span>
                  <span className="label-caps whitespace-nowrap text-right text-muted">
                    {award.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* In the Press */}
      <section className="shell py-16 md:py-20">
        <div className="text-center">
          <h2 className="font-display text-4xl font-medium md:text-5xl">
            In the Press
          </h2>
          <span className="mx-auto mt-6 block h-px w-16 bg-accent" />
        </div>
        <ul className="mx-auto mt-12 max-w-3xl">
          {press.map((item) => (
            <li
              key={item.name}
              className="flex items-start justify-between gap-6 border-t border-foreground/10 py-8 last:border-b"
            >
              <div>
                <p className="font-display text-2xl">{item.name}</p>
                <p className="mt-2 font-light italic text-muted">
                  {item.title}
                </p>
              </div>
              <span className="label-caps whitespace-nowrap text-muted">
                {item.date}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <CallToAction heading="Ready to start your own project?" />
    </>
  );
}
