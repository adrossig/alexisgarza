"use client";

import Image from "next/image";
import { useRef } from "react";

type Space = {
  name: string;
  material: string;
};

export default function SpacesCarousel({ spaces }: { spaces: Space[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  // Scroll by one slide, measured from the first child so gap changes stay in sync.
  function scrollBy(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;

    const slide = track.firstElementChild as HTMLElement | null;
    const step = slide ? slide.offsetWidth + 24 : track.clientWidth;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  return (
    <>
      <div className="mx-auto flex max-w-[1440px] items-end justify-between gap-6 px-5 md:px-10 lg:px-20">
        <h2 className="font-display text-4xl font-medium md:text-5xl">Spaces.</h2>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Previous space"
            className="flex h-11 w-11 items-center justify-center border border-foreground/30 transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Next space"
            className="flex h-11 w-11 items-center justify-center border border-foreground/30 transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="bleed-track mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {spaces.map((space, i) => (
          <figure
            key={space.name}
            className="w-[86vw] shrink-0 snap-start md:w-[62vw]"
          >
            <div className="relative aspect-[16/9] overflow-hidden md:aspect-[2/1]">
              <Image
                src="/Image.png"
                alt={space.name}
                fill
                sizes="(max-width: 768px) 86vw, 62vw"
                className="img-grade object-cover"
              />
              <span className="grain" />
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between gap-6">
              <span className="label-caps text-muted">
                {String(i + 1).padStart(2, "0")} // {space.name}
              </span>
              <span className="label-caps text-right text-muted">{space.material}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
