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
  philosophyTitle: string;
  philosophyBody: string[];
  paletteTitle: string;
  materials: string[];
  hardware: { title: string; body: string };
  spaces: { name: string; material: string }[];
};

export const projects: Project[] = [
  {
    slug: "coastal-retreat",
    name: "Coastal Retreat",
    place: "Marbella",
    year: "2025",
    category: "Residential",
    summary:
      "A sun-washed family home where linen, lime plaster, and weathered oak meet the sea.",
    intro:
      "A study in light and tactile warmth. Restoring a mid-century structure into a sanctuary of raw minimalism and handcrafted details overlooking the Mediterranean.",
    facts: [
      { label: "Year", value: "2025" },
      { label: "Size", value: "320 SQM" },
      { label: "Scope", value: "Full renovation" },
    ],
    philosophyTitle: "The Philosophy of Sun and Stone.",
    philosophyBody: [
      "Our approach to Coastal Retreat was deeply rooted in the concept of 'sophisticated artisanship'. We sought to honor the original brutalist bones of the structure while introducing a layer of profound softness.",
      "By pulling the landscape inward, removing strict boundaries between interior and exterior, we created a living space that feels like a natural extension of the rugged coastal cliffs.",
    ],
    paletteTitle: "Tactile Warmth.",
    materials: ["Reclaimed walnut", "Italian bouclé"],
    hardware: {
      title: "Custom Hardware",
      body: "Every handle and fixture was cast in unlacquered brass, designed to age and patina gracefully with the sea air, recording the history of the home over time.",
    },
    spaces: [
      { name: "The Kitchen", material: "Monolithic marble" },
      { name: "The Living Room", material: "Lime plaster" },
      { name: "The Principal Suite", material: "Washed linen" },
      { name: "The Terrace", material: "Weathered oak" },
    ],
  },
  {
    slug: "the-linen-house",
    name: "The Linen House",
    place: "Mexico City",
    year: "2024",
    category: "Hospitality",
    summary:
      "A nine-room boutique hotel wrapped in warm neutrals, clay tile, and hand-loomed textiles.",
    intro:
      "A restored townhouse turned intimate hotel, where every guest feels like they are staying with a well-travelled friend. Nine rooms, one shared language of material.",
    facts: [
      { label: "Year", value: "2024" },
      { label: "Size", value: "9 keys" },
      { label: "Scope", value: "Interiors & FF&E" },
    ],
    philosophyTitle: "The Philosophy of Clay and Thread.",
    philosophyBody: [
      "Each room was designed around a single hero textile, giving nine spaces a shared language without a single one repeating. The house reads as collected, never specified.",
      "We restored the original mouldings and ironwork, then let contemporary furniture sit gently against them — a conversation between two centuries rather than an argument.",
    ],
    paletteTitle: "Woven Neutrals.",
    materials: ["Hand-loomed cotton", "Barro clay tile"],
    hardware: {
      title: "Custom Hardware",
      body: "Door pulls and hooks were forged by a family workshop in Oaxaca, each one slightly irregular, so the hand of the maker stays present in every room.",
    },
    spaces: [
      { name: "The Courtyard Bar", material: "Barro clay" },
      { name: "The Reading Room", material: "Aged brass" },
      { name: "Room Nº4", material: "Hand-loomed cotton" },
      { name: "The Stair Hall", material: "Restored ironwork" },
    ],
  },
  {
    slug: "atelier-no-7",
    name: "Atelier Nº7",
    place: "Lisbon",
    year: "2024",
    category: "Retail",
    summary:
      "A jewellery atelier and showroom where raw stone meets soft, gallery-like light.",
    intro:
      "A workshop and showroom in one, designed to feel precious without feeling cold — a space that flatters both the maker and the made.",
    facts: [
      { label: "Year", value: "2024" },
      { label: "Size", value: "85 SQM" },
      { label: "Scope", value: "Retail concept" },
    ],
    philosophyTitle: "The Philosophy of Stone and Light.",
    philosophyBody: [
      "We set matte micro-cement against travertine plinths so the pieces read like small sculptures under focused, warm light — a gallery that happens to sell.",
      "The working bench sits in full view, making craft part of the experience rather than something hidden in the back of the house.",
    ],
    paletteTitle: "Quiet Minerals.",
    materials: ["Roman travertine", "Matte micro-cement"],
    hardware: {
      title: "Custom Hardware",
      body: "Display fittings were machined from solid brass and left unlacquered, so the surfaces the staff touch daily darken faster than those they do not.",
    },
    spaces: [
      { name: "The Showroom", material: "Roman travertine" },
      { name: "The Bench", material: "Solid brass" },
      { name: "The Curved Wall", material: "Micro-cement" },
    ],
  },
  {
    slug: "verde-loft",
    name: "Verde Loft",
    place: "Barcelona",
    year: "2023",
    category: "Residential",
    summary:
      "An industrial loft softened with greenery, vintage finds, and deep, grounding tones.",
    intro:
      "A hard-edged industrial shell made tender — a home for a couple who collect art, plants, and stories, and needed room for all three.",
    facts: [
      { label: "Year", value: "2023" },
      { label: "Size", value: "140 SQM" },
      { label: "Scope", value: "Interiors & joinery" },
    ],
    philosophyTitle: "The Philosophy of Concrete and Green.",
    philosophyBody: [
      "We kept the raw concrete and steel, then layered in walnut, olive-toned upholstery, and a wall of plants to warm a volume that had spent forty years being cold.",
      "Vintage pieces were sourced over several months so the loft reads as collected over time, never bought in one afternoon.",
    ],
    paletteTitle: "Grounded Tones.",
    materials: ["American walnut", "Olive velvet"],
    hardware: {
      title: "Custom Hardware",
      body: "Blackened steel details were drawn from the building's original window frames, then repeated at every handle, shelf bracket, and stair rail.",
    },
    spaces: [
      { name: "The Kitchen Island", material: "American walnut" },
      { name: "The Plant Wall", material: "Raw concrete" },
      { name: "The Studio", material: "Blackened steel" },
      { name: "The Mezzanine", material: "Olive velvet" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
