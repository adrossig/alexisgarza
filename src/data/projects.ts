/** Stand-in still used by projects that have not been photographed yet. */
const PLACEHOLDER_IMAGE = "/projects/los-cedros/01-living-room.jpg";

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
  {
    slug: "gardenia",
    name: "Gardenia",
    place: "Monterrey",
    year: "2023",
    category: "Residential",
    summary:
      "A house turned toward the Sierra Madre — charcoal plaster, raw brick, and tufted cream over dark polished stone.",
    intro:
      "The mountain does the decorating. Every principal room was planned around a sightline to the Sierra Madre, and the interior was kept dark and quiet so the view stays the brightest thing in it.",
    facts: [
      { label: "Year", value: "2023" },
      { label: "Size", value: "380 SQM" },
      { label: "Scope", value: "Interiors & furniture" },
    ],
    images: {
      card: "/projects/gardenia/01-living-room.jpg",
      hero: "/projects/gardenia/01-living-room.jpg",
      detail: "/projects/gardenia/06-lounge-detail.jpg",
      palette: "/projects/gardenia/02-dining-room.jpg",
    },
    orientation: "landscape",
    philosophyTitle: "The Philosophy of Brick and Shadow.",
    philosophyBody: [
      "We inherited two strong materials — exposed brick and a dark polished stone floor — and chose to lean into both rather than soften them. Charcoal plaster was drawn across the main walls so the room reads as a shadow box, and the glazing at either end becomes the only real source of colour.",
      "Warmth comes back in through the furniture: tufted cream upholstery, cognac leather, and pale birch ply built by a local workshop. Nothing matches exactly, which is what keeps a dark room from feeling like a hotel lobby.",
    ],
    paletteTitle: "Charcoal, Brick, Birch.",
    materials: [
      { name: "Charcoal plaster", image: "/projects/gardenia/01-living-room.jpg" },
      { name: "Birch ply", image: "/projects/gardenia/06-lounge-detail.jpg" },
    ],
    hardware: {
      title: "Screened Light",
      body: "Solar-screen rollers were specified at every opening, woven open enough to keep the mountain legible through the fabric but dense enough to kill the afternoon glare off the stone floor.",
    },
    spaces: [
      {
        name: "The Living Room",
        material: "Charcoal plaster",
        image: "/projects/gardenia/01-living-room.jpg",
      },
      {
        name: "The Dining Room",
        material: "Green marble",
        image: "/projects/gardenia/02-dining-room.jpg",
      },
      {
        name: "The Terrace Lounge",
        material: "Solar screen",
        image: "/projects/gardenia/03-terrace-lounge.jpg",
      },
      {
        name: "The Principal Suite",
        material: "Slate blue",
        image: "/projects/gardenia/04-principal-suite.jpg",
      },
      {
        name: "The Kitchen",
        material: "Raw brick",
        image: "/projects/gardenia/05-kitchen-garden-view.jpg",
      },
      {
        name: "The Games Corner",
        material: "Birch ply",
        image: "/projects/gardenia/06-lounge-detail.jpg",
      },
    ],
  },
  {
    slug: "las-misiones",
    name: "Las Misiones",
    place: "Monterrey",
    year: "2023",
    category: "Residential",
    summary:
      "An upper-floor home among the oaks, where sheer shades turn treetop light into a soft, even wash.",
    intro:
      "A home that sits in the canopy. Sheer horizontal shades run the full length of the glazing, so the oaks outside arrive as filtered green light rather than as a view you have to look at.",
    facts: [
      { label: "Year", value: "2023" },
      { label: "Size", value: "260 SQM" },
      { label: "Scope", value: "Interiors & furniture" },
    ],
    images: {
      card: "/projects/las-misiones/01-living-room.jpg",
      hero: "/projects/las-misiones/01-living-room.jpg",
      detail: "/projects/las-misiones/05-art-detail.jpg",
      palette: "/projects/las-misiones/04-reading-corner.jpg",
    },
    orientation: "landscape",
    philosophyTitle: "The Philosophy of Filtered Light.",
    philosophyBody: [
      "The whole scheme rests on one decision: shade the glass rather than dress it. Sheer horizontal blinds diffuse the treetop light into something flat and even, which let us keep the walls plain white and the ceilings uncluttered.",
      "Against that neutral shell we set weight and warmth — dark walnut casework, cognac leather, pale grey hide — and left the colour to the owners' own collection of folk ceramics and textile art. The rooms are a backdrop; the collection is the subject.",
    ],
    paletteTitle: "Cognac, Walnut, Grey.",
    materials: [
      {
        name: "Cognac leather",
        image: "/projects/las-misiones/04-reading-corner.jpg",
      },
      {
        name: "Dark walnut",
        image: "/projects/las-misiones/02-sitting-room.jpg",
      },
    ],
    hardware: {
      title: "Layered Shading",
      body: "Every opening carries two layers — a sheer horizontal blind for daytime diffusion and an opaque roller behind it — so a room can go from filtered green to fully dark without a curtain ever appearing.",
    },
    spaces: [
      {
        name: "The Living Room",
        material: "Sheer shading",
        image: "/projects/las-misiones/01-living-room.jpg",
      },
      {
        name: "The Sitting Room",
        material: "Dark walnut",
        image: "/projects/las-misiones/02-sitting-room.jpg",
      },
      {
        name: "The Salon",
        material: "Grey leather",
        image: "/projects/las-misiones/03-living-room-wide.jpg",
      },
      {
        name: "The Reading Corner",
        material: "Cognac leather",
        image: "/projects/las-misiones/04-reading-corner.jpg",
      },
      {
        name: "The Collection",
        material: "Folk ceramic",
        image: "/projects/las-misiones/05-art-detail.jpg",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
