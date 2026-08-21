import type { Metadata } from "next";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Philosophy — Alexis Garza",
  description:
    "Latin warmth and European restraint in the same room. How the studio works, from first walk-through to styling day.",
};

const process = [
  {
    n: "01",
    title: "Discovery",
    body: "We walk the space with you and ask how you actually live in it. Who eats where, which rooms sit unused, what the light does at four in the afternoon.",
  },
  {
    n: "02",
    title: "Concept",
    body: "Plans, elevations, and a materials board you can hold. Palette, joinery, and furniture settle here, before anything is ordered.",
  },
  {
    n: "03",
    title: "Execution",
    body: "We run the site: trades scheduled, samples signed off, finishes checked against the board. The last day is styling, down to the books on the table.",
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
          Latin Warmth, European Restraint.
        </h1>
        <p className="mx-auto mt-8 max-w-xl font-light leading-relaxed text-muted">
          Sun-bleached plaster and terracotta, held to the tight line of European
          minimalism. A house that reads calm without going cold, and asks to be
          touched.
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
                  Luxury, to us, is the mark of a hand. Plaster laid by trowel,
                  wood with the grain still in it, wool you feel underfoot.
                  Colour arrives in washes rather than accents, and we leave
                  rooms emptier than most clients expect.
                </p>
                <p>
                  We hang a house the way you would hang a gallery: fewer
                  pieces, more air, everything placed on purpose. The plan holds
                  to the architecture, and the materials do the warming.
                </p>
              </div>
              <div className="relative mt-10 aspect-[4/3] overflow-hidden">
                <Image
                  src="/projects/los-cedros/05-dining-detail.jpg"
                  alt="A bronze figure and textured canvas against blush plaster at Los Cedros"
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
                Design editors have covered the studio since 2020, in print and
                online. A selection below.
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

      <CallToAction heading="Thinking about your own place?" />
    </>
  );
}
