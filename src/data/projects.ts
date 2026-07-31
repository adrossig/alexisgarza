/** Stand-in still used by projects that have not been photographed yet. */
const PLACEHOLDER_IMAGE = "/Image.png";

export type Project = {
  slug: string;
  name: string;
  place: string;
  year: string;
  category: string;
  summary: string;
  intro: string;
  /** Hero spec rows — year, size, scope. */
  facts: { label: string; value: string }[];
  /** Photography per layout slot; each falls back to the placeholder. */
  images?: {
    card?: string;
    hero?: string;
    detail?: string;
    palette?: string;
  };
  /** Shape of the source photography — sizes the Spaces slides to avoid hard crops. */
  orientation?: "portrait" | "landscape";
  philosophyTitle: string;
  philosophyBody: string[];
  paletteTitle: string;
  materials: { name: string; image?: string }[];
  hardware: { title: string; body: string };
  spaces: { name: string; material: string; image?: string }[];
};

/** Resolve an optional project image to a renderable src. */
export function projectImage(src?: string): string {
  return src ?? PLACEHOLDER_IMAGE;
}

export const projects: Project[] = [
  {
    slug: "los-vitrales",
    name: "Los Vitrales",
    place: "Monterrey",
    year: "2025",
    category: "Residential",
    summary:
      "A double-height apartment in Monterrey where sheer linen, white marble, and black lacquer hold a single, quiet line.",
    intro:
      "An apartment built around its own light. Nine metres of glass, veiled in sheer linen, wash a white marble floor from morning to dusk — and every other surface was chosen to stay out of the way.",
    facts: [
      { label: "Year", value: "2025" },
      { label: "Size", value: "240 SQM" },
      { label: "Scope", value: "Interiors & styling" },
    ],
    images: {
      card: "/projects/los-vitrales/01-living-room-atrium.jpeg",
      hero: "/projects/los-vitrales/01-living-room-atrium.jpeg",
      detail: "/projects/los-vitrales/02-living-dining.jpeg",
      palette: "/projects/los-vitrales/04-principal-suite.jpeg",
    },
    orientation: "portrait",
    philosophyTitle: "The Philosophy of Light and Lacquer.",
    philosophyBody: [
      "The apartment takes its name from the glass that defines it. Rather than dress those windows, we veiled them — floor-to-ceiling sheers that turn Monterrey's hard northern light into something diffuse and even, and let the double-height volume read as one uninterrupted wall of white.",
      "Against that softness we placed weight: black lacquer, honed marble, deep-pile wool. The public rooms stay bright and almost weightless; the private ones go dark and enveloping. One apartment, two temperatures, held together by a single material vocabulary.",
    ],
    paletteTitle: "White Light, Black Weight.",
    materials: [
      {
        name: "Calacatta porcelain",
        image: "/projects/los-vitrales/03-guest-suite.jpeg",
      },
      {
        name: "Fluted blackwood",
        image: "/projects/los-vitrales/04-principal-suite.jpeg",
      },
    ],
    hardware: {
      title: "Concealed Detailing",
      body: "Curtain tracks, linear diffusers, and cove lighting were all recessed into the ceiling plane, so nothing interrupts the drop of the fabric. What you notice is the light, never the fitting that delivers it.",
    },
    spaces: [
      {
        name: "The Double-Height Living Room",
        material: "Sheer linen",
        image: "/projects/los-vitrales/01-living-room-atrium.jpeg",
      },
      {
        name: "The Dining Room",
        material: "Black lacquer",
        image: "/projects/los-vitrales/02-living-dining.jpeg",
      },
      {
        name: "The Guest Suite",
        material: "Cove lighting",
        image: "/projects/los-vitrales/03-guest-suite.jpeg",
      },
      {
        name: "The Principal Suite",
        material: "Fluted blackwood",
        image: "/projects/los-vitrales/04-principal-suite.jpeg",
      },
      {
        name: "The Fitness Nook",
        material: "Blackout drape",
        image: "/projects/los-vitrales/05-fitness-nook.jpeg",
      },
    ],
  },
  {
    slug: "los-cedros",
    name: "Los Cedros",
    place: "Monterrey",
    year: "2024",
    category: "Residential",
    summary:
      "A family home in warm neutrals — blush plaster, olive velvet, woven grasscloth, and brushed brass.",
    intro:
      "A house that entertains and a house that exhales, held in one palette. Formal rooms for guests, softer rooms for the family, and not a single hard edge between the two.",
    facts: [
      { label: "Year", value: "2024" },
      { label: "Size", value: "310 SQM" },
      { label: "Scope", value: "Full interiors & styling" },
    ],
    images: {
      card: "/projects/los-cedros/01-living-room.jpg",
      hero: "/projects/los-cedros/01-living-room.jpg",
      detail: "/projects/los-cedros/05-dining-detail.jpg",
      palette: "/projects/los-cedros/03-living-room-chandelier.jpg",
    },
    orientation: "landscape",
    philosophyTitle: "The Philosophy of Warmth and Restraint.",
    philosophyBody: [
      "The brief asked for a home that could receive guests without ever feeling staged. We answered with one warm neutral palette carried through every room — blush and greige plaster, limed oak, woven grasscloth — so the house reads as continuous rather than decorated room by room.",
      "Colour arrives only as depth, never as contrast. Olive velvet on the wing chairs, a deeper olive on the family room walls, bronze and brushed brass in the hardware. Everything else steps back and lets the light off the terrace do the work.",
    ],
    paletteTitle: "Blush, Olive, Brass.",
    materials: [
      {
        name: "Olive velvet",
        image: "/projects/los-cedros/02-living-room-seating.jpg",
      },
      {
        name: "Woven grasscloth",
        image: "/projects/los-cedros/08-principal-suite.jpg",
      },
    ],
    hardware: {
      title: "Brass and Bronze",
      body: "Table frames, lamp bases, and cabinet pulls were kept to a single family of brushed brass, warmed by bronze accents — enough to catch the light at dusk, never enough to announce itself.",
    },
    spaces: [
      {
        name: "The Living Room",
        material: "Blush plaster",
        image: "/projects/los-cedros/01-living-room.jpg",
      },
      {
        name: "The Salon",
        material: "Olive velvet",
        image: "/projects/los-cedros/02-living-room-seating.jpg",
      },
      {
        name: "The Dining Room",
        material: "Limed oak",
        image: "/projects/los-cedros/04-dining-room.jpg",
      },
      {
        name: "The Family Room",
        material: "Olive grasscloth",
        image: "/projects/los-cedros/06-family-room.jpg",
      },
      {
        name: "The Principal Suite",
        material: "Woven grasscloth",
        image: "/projects/los-cedros/08-principal-suite.jpg",
      },
      {
        name: "The Guest Suite",
        material: "Pleated linen",
        image: "/projects/los-cedros/09-guest-suite.jpg",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
