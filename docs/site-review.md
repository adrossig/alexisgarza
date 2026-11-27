# Casa Garza × Alexis Garza website: review and handover plan

Reviewed 27 November 2026, commit `3009e45`. Next.js 16.2.10, React 19.2, Tailwind 4.

## 1. Summary

The build is clean. Lint, type check and production build all pass. The layout, type system and accessibility work are better than most studio sites. It is not ready to launch, for three reasons:

1. **No inquiry can reach Alexis.** The form shows "Thank you" and throws the message away. The published address `studio@alexisgarza.com` has no mail server, so email bounces too. Only the phone link works.
2. **Some content is invented.** The Marbella address, the press and awards list (AD, Elle Decor, Dezeen, Vogue Living) and the "Elena R., Madrid" testimonial are placeholders. Monterrey's design scene is small and one search exposes them.
3. **Every word and photo lives in code.** Alexis cannot add a project, fix a typo or swap a photo without you.

Also urgent: the pinned Next.js version (16.2.10) has critical security advisories. `npm audit` flags every release up to 16.4.4.

## 2. Decisions already made

| Topic | Decision | What it changes |
|---|---|---|
| Brand | Endorsed: Casa Garza and Alexis Garza together | Logo lockup, site name, metadata, domain and email all need rework |
| Language | Spanish by default, English second | Locale routing, and every text field in the CMS exists twice |
| Positioning | Three offers: interior design, window treatments, and furniture Alexis designs himself | New Services and Furniture sections, wider form, new CMS content types (see below) |
| Self-editing | Alexis edits everything | Full CMS, including site settings and every page, not only projects |

### What the positioning decision adds

- **Services page** (Servicios) with two doors. Door one: window treatments (cortinas, persianas, motorización) with a free measuring visit and a WhatsApp quote. Door two: interior design (interiorismo) with the process and the portfolio. Window treatments are the entry offer that leads to design commissions.
- **Furniture section** (Mobiliario) showing the pieces Alexis designed and had made: a grid of pieces, one page per piece, and an "Ask about this piece" button that opens WhatsApp or the form with the piece name filled in. Showcase only, no online shop.
- **Navigation** becomes: Portafolio, Servicios, Mobiliario, Estudio, plus the Contacto button.
- **Home** gets a short block for each offer under the hero.
- **Inquiry form** project types become: interior design, window treatments, custom furniture, other. The form also takes the piece name when it comes from a furniture page.
- **Project pages** can tag which offers were involved (design, window treatments, furniture), so the portfolio honestly shows what Casa Garza did on each job.

## 3. Strengths

- **Accessibility is genuinely good.** Skip link, one consistent focus ring, `prefers-reduced-motion` respected everywhere, labelled carousel and menu, inline form errors tied with `aria-describedby`, focus moved to the first invalid field and to the confirmation. Contrast tokens are documented (`--placeholder` clears 4.5:1).
- **Coherent visual system.** One set of colour tokens, one page shell (`.shell`), one label style. Bodoni Moda with Montserrat suits the market. Pages feel like one site.
- **Hero and palette frames follow the photograph.** `src/lib/imageSize.ts` reads each file's real ratio at build time, so those frames keep the photo's shape instead of forcing one crop. (The carousel is the exception, see U16.)
- **Project pages have a strong editorial structure.** Hero with facts, philosophy, palette, spaces carousel, previous and next navigation that wraps around.
- **Fast by construction.** Every route is prerendered static HTML. Fonts are self-hosted through `next/font`. Images go through `next/image` with correct `sizes`.
- **Small, readable codebase.** About 2,000 lines, no dead dependencies, consistent naming, comments explain intent.
- **Project copy is specific.** It names materials, light and decisions instead of adjectives.

## 4. Must fix before launch

| # | Problem | Where | Fix |
|---|---|---|---|
| C1 | Form discards every inquiry and still says "Thank you" | `src/app/inquire/InquireForm.tsx:76` | Server action that sends the inquiry by email (Resend or Postmark) and stores a copy. Pending, error and success states. WhatsApp link as fallback on error |
| C2 | `studio@alexisgarza.com` cannot receive mail (domain has no MX record) | `SiteFooter.tsx:32`, `inquire/page.tsx:62` | Create a mailbox on the chosen domain, or show an address that works today |
| C3 | Fake studio address in Marbella, Spain | `src/app/inquire/page.tsx:50-54` | Real address, or "Monterrey and San Pedro Garza García, by appointment" |
| C4 | Invented press, awards and testimonial | `src/app/philosophy/page.tsx:29-52`, `:125-131` | Remove now. Replace with real reviews and real press, or hide the sections until they exist |
| C5 | Portrait shows the Casa Garza logo burned into the corner | `public/alexis_garza.jpg`, used on `/philosophy` | Get the original photo without the overlay |
| C6 | No privacy notice, yet the form collects names and emails | missing | Aviso de Privacidad page, required in Mexico under the LFPDPPP, linked from the form and footer |
| C7 | Placeholder image fallback can show a Los Cedros photo on another project without any warning | `src/data/projects.ts:2,33` | Remove the fallback. Make images required in the CMS |
| C8 | Next.js pinned to 16.2.10, which `npm audit` marks critical (Image Optimizer RCE, Server Action DoS, cache poisoning, among others) | `package.json:13` | Upgrade to the latest 16.x patch, use a caret range, turn on Dependabot or Renovate |

## 5. UI and UX weaknesses

| # | Issue | Where | Fix |
|---|---|---|---|
| U1 | Home hero does not say who, what or where. "Sculpting Space with Tactile Warmth" could be any studio anywhere | `src/app/page.tsx:29-31` | Lead with the offer and the place: interior design in Monterrey, by Alexis Garza |
| U2 | Alexis's face and story are buried halfway down "Philosophy". There is no About or Studio entry in the menu | `SiteHeader.tsx:7` | Rename Philosophy to Studio (Estudio), put the portrait and a short bio first |
| U3 | No WhatsApp anywhere. In Monterrey it is the first contact channel | site-wide | WhatsApp click-to-chat in header (mobile), footer, CTA band and inquire page, with a prefilled message |
| U4 | Form asks nothing that helps qualify a lead: no phone, city, timeline, budget range or size | `InquireForm.tsx` | Add phone or WhatsApp, location, timeline, approximate budget, how they found the studio |
| U5 | Form has no sending state, no failure state, and does nothing with JavaScript off | `InquireForm.tsx:63-78` | Server action with `useActionState`, disabled button while sending, typed text kept on failure, visible error with WhatsApp and email fallback |
| U6 | Confirmation switches to "I" while the rest of the site says "we" | `InquireForm.tsx:90` | Pick one voice (solo designer: "I" may be more honest) |
| U7 | The photos are site snapshots, not editorial photography, and the layout depends on them. The Los Vitrales hero (also the main card on Home) shows an installer on a ladder in the bottom-left corner. The Los Vitrales principal suite shows an air-conditioning unit, a toilet roll and remotes on the nightstand. A treadmill is presented as a "space". The same photo also appears two or three times on one project page (hero, first space slide, material tile) | `public/projects/*`, `src/data/projects.ts` | Professional shoot of the two strongest projects. Until then, drop the cluttered frames and use each photo once |
| U8 | "Material" tiles show whole rooms, not materials, so the label and the photo disagree | `src/data/projects.ts` materials arrays | Real close-ups of each material, or drop the tiles |
| U9 | "Sophisticated Artisanship" heading appears on both Home and Philosophy, and every project uses the same "The Philosophy of X and Y." formula | `page.tsx:55`, `philosophy/page.tsx:76`, projects | Vary the headings. Formula titles read as a template |
| U10 | Featured projects on Home are just the first three in the array. Alexis cannot choose | `src/app/page.tsx:7-8` | "Featured" field and manual order in the CMS |
| U11 | Portrait-format project heroes push the title below the fold on laptop screens (Los Vitrales) | `portfolio/[slug]/page.tsx:87-113` | Cap hero height, or let the CMS crop a landscape hero with a hotspot |
| U12 | Image alt text is only the project name on heroes and carousel slides. On cards the name is read twice, once from the image and once from the caption | `page.tsx:113,140`, `portfolio/page.tsx:34`, `[slug]/page.tsx:93`, `SpacesCarousel.tsx:214` | Alt text field per image in the CMS, required. Empty `alt=""` on card images whose caption already names the project |
| U13 | Footer has no phone, WhatsApp, address or legal links | `SiteFooter.tsx` | Feed it from the site settings in the CMS |
| U14 | Form lists Hospitality and Retail, but no such project is shown | `InquireForm.tsx:5-11`, `layout.tsx:24` | Replace with the real offers: interior design, window treatments, custom furniture, other |
| U15 | Inquire page title at `text-8xl` pushes the form below the fold on laptops | `inquire/page.tsx:16` | Smaller title, form visible on arrival |
| U16 | The carousel uses one frame shape per project, but photo sets mix shapes. `gardenia/03` and `las-misiones/04` are portrait files cropped into landscape frames | `SpacesCarousel.tsx:15-26` | Size each slide from its own image dimensions (the CMS provides them) |
| U17 | Project title adds a full stop after the name ("Gardenia."). If the editor types one, it shows twice | `portfolio/[slug]/page.tsx:107` | Drop the hard-coded full stop, or strip a trailing one |
| U18 | "Discover our work" shows a down arrow but leaves the page for /portfolio | `src/app/page.tsx:37-43` | Right arrow, or scroll to the projects on the same page |
| U19 | On mobile, Inquire is hidden inside the menu. No contact action is visible while browsing projects | `SiteHeader.tsx:82-88` | Small sticky bar on mobile with WhatsApp and Inquire |
| U20 | Overlay labels on the small home cards are 10.4 px | `globals.css:123-125`, `page.tsx:148` | 12 px minimum |
| U21 | Mid-page "Read full manifesto" link on every project page pulls visitors away from the closing call to action | `[slug]/page.tsx:129-135` | Remove, or move below the carousel |
| U22 | Sizes written "240 SQM", an English abbreviation | `src/data/projects.ts` facts | "240 m²" |

## 6. Technical weaknesses

| # | Issue | Where | Fix |
|---|---|---|---|
| T1 | All content hard-coded in TSX and one TS module | `src/data/projects.ts`, every `page.tsx` | CMS (section 8) |
| T2 | English only, `lang="en"` | `src/app/layout.tsx:45` | `[lang]` route segment plus `proxy.ts` for locale detection (Next 16 renamed `middleware.ts` to `proxy.ts`), `hreflang` alternates |
| T3 | Default Next.js favicon | `src/app/favicon.ico` (25,931 bytes, the create-next-app file) | Favicon and `apple-icon` from the new logo |
| T4 | No `robots.txt`, `sitemap.xml`, Open Graph image, canonical or `metadataBase`. Open Graph is set only at the root, so every page (including each project) shares the same generic title and no image | `src/app/layout.tsx:25-30` | `metadataBase`, `title.template`, per-page and per-project `openGraph` with the hero image, `robots.ts`, `sitemap.ts`. Links shared on WhatsApp currently show no preview image |
| T5 | No structured data | missing | `LocalBusiness` / `InteriorDesigner` JSON-LD with address, phone, area served, social profiles |
| T6 | No conversion tracking | `layout.tsx` has `<Analytics />` only | `track()` events for form sent and WhatsApp click |
| T7 | No tests and no CI | repo | Build and lint on every push, one Playwright smoke test per route, a unit test for the form action |
| T8 | Source photos top out at 1600 px wide, used full-bleed on the home hero | `public/projects/*` | Originals at 2400 px or more. Soft on retina screens today |
| T9 | Unused files in `public/`: `Image.png` (1.1 MB reference screenshot), five default SVGs, `los-cedros/07-family-room-seating.jpg` | `public/` | Delete |
| T10 | Default README from create-next-app | `README.md` | Short README: stack, env vars, how content works, deploy |
| T11 | CSS filter plus a blended grain layer on every image | `globals.css:151-163` | Fine on desktop. Costly on low-end Android. Bake the colour grade into the files, keep grain on the hero only |
| T12 | No security headers. `next.config.ts` is empty and `X-Powered-By: Next.js` is sent | `next.config.ts` | `headers()` with CSP (`frame-ancestors`), `Referrer-Policy`, `Permissions-Policy`, `X-Content-Type-Options`; `poweredByHeader: false` |
| T13 | `priority` on `next/image` is deprecated in Next 16 | `page.tsx:20`, `[slug]/page.tsx:95` | Use `preload` |
| T14 | `imageSize.ts` reads only local files and ignores EXIF rotation. CMS images would silently fall back to 3:2 | `src/lib/imageSize.ts:27-66` | Replace with the dimensions the CMS returns |
| T15 | React keys use editable text (`space.name`, `material.name`, paragraph text). Two identical names from an editor will collide | `SpacesCarousel.tsx:210`, `[slug]/page.tsx:126,187` | Use the CMS item keys |
| T16 | Home page reads `projects[0]` and would crash with zero projects | `src/app/page.tsx:7` | Guard empty lists once content comes from the CMS |
| T17 | No `error.tsx` or `global-error.tsx`, no error monitoring | `src/app/` | Branded error page, plus Sentry or Vercel monitoring |
| T18 | Phone uses the old `+52 1` mobile prefix, retired in Mexico in 2019 | `inquire/page.tsx:68-71` | `+52 81 8656 4134`, and a `wa.me/528186564134` link |
| T19 | Once the form sends email it becomes a spam target | future | Honeypot and time trap, Turnstile or Vercel BotID, per-IP rate limit, server-side length limits, HTML-escape the email, visitor address only in `Reply-To`, API key in server env vars |

## 7. Content weaknesses

- **The scope shown may be larger than the work done.** Project facts say "Interiors & styling" or "Full interiors & styling". The photos look like installation-day shots for window treatments (an installer is still on a ladder in one hero), and every project's detailing block is about curtains, blinds or shades. If Casa Garza supplied the window treatments only, presenting these as full interior projects is the same credibility risk as the invented press. Ask Alexis exactly what he did on each project.
- Facts in project pages (sizes, years, "nine metres of glass", "built by a local workshop") need Alexis to confirm each one.
- Project names (Los Vitrales, Los Cedros, Gardenia, Las Misiones) need confirmation and client permission to publish.
- Only one testimonial, and it is invented.
- No price signal at all. A minimum project budget or a "projects from" line filters out leads he cannot take.
- No service area named.

## 8. Self-management: what is missing

Today Alexis can change nothing. Below is what he needs to never call you for content again.

### 8.1 Recommended setup

**Sanity** (hosted CMS, free tier) with the editor embedded at `/studio` on the site.

Why Sanity over the alternatives:

| Option | Verdict |
|---|---|
| Sanity | **Recommended.** Image hotspot and crop solves the cropping problems the git history shows (`193d1b0`, `6c90d3c`). Field-level Spanish and English. Studio interface available in Spanish. Revision history, so he can undo. No database for you to run |
| Payload 3 | Lives inside the Next app, but you then own a Postgres database, file storage and backups forever |
| Keystatic or Tina | Content stays in git like today and costs nothing, but Alexis needs a GitHub account, image handling is weak, and every edit triggers a full rebuild |
| Framer or Squarespace | Full independence, but throws away a clean, accessible build and adds a monthly fee |

Publishing flow: Sanity sends a webhook to a route handler that calls `revalidateTag(tag, { expire: 0 })` (the Next 16 two-argument form), so a published change is live in seconds without a rebuild. Draft mode gives him a preview before publishing.

### 8.2 What he will be able to edit

Fields marked *ES/EN* exist in both languages.

**Site settings** (one document)
- Logo, site name, tagline *ES/EN*
- Email, phone, WhatsApp number, prefilled WhatsApp message *ES/EN*
- Address or service area *ES/EN*, Google Maps link
- Social links (Instagram, Facebook, Pinterest, any others)
- Footer text *ES/EN*, default SEO title and description *ES/EN*, default share image
- Who receives inquiries (one or more emails)

**Home page**
- Hero image with alt text *ES/EN*, title *ES/EN*, intro *ES/EN*
- Philosophy teaser: title, text *ES/EN*, image
- Featured projects: one main and two secondary, picked and ordered by him
- Closing call-to-action heading *ES/EN*

**Studio page** (today's Philosophy)
- Title and intro *ES/EN*, bio *ES/EN*, portrait
- Process steps (add, remove, reorder): title, text *ES/EN*
- Awards: name, detail, year, link
- Press: outlet, article title *ES/EN*, date, link or scan
- Testimonials (picked from the testimonial list)

**Inquire page**
- Title, intro, confirmation message *ES/EN*, side image
- Project types offered in the form *ES/EN*

**Privacy notice**: rich text *ES/EN*

**Projects** (add, edit, hide, reorder)
- Name, URL slug, location, year, category
- Summary, intro *ES/EN*, facts (label and value) *ES/EN*
- Card image, hero image, detail image, palette image, each with crop hotspot and alt text *ES/EN*
- Philosophy title and text *ES/EN*, palette title *ES/EN*
- Materials (name *ES/EN*, close-up image), detailing block (title, text *ES/EN*)
- Spaces (name, material *ES/EN*, image), in any order
- SEO overrides, photographer credit, "client approved publication" checkbox

**Services page**
- Intro *ES/EN*
- Services (add, remove, reorder): name *ES/EN*, short text *ES/EN*, image, what is included *ES/EN*, optional "from" price, call-to-action label *ES/EN*
- Window treatment product types (cortinas, persianas, motorización, others): name, text *ES/EN*, photos, brands carried
- Measuring visit offer: text *ES/EN*, whether it is free, area covered

**Furniture pieces** (add, edit, hide, reorder)
- Name *ES/EN*, URL slug, year
- Short story *ES/EN* (inspiration, who made it, where)
- Materials and finishes *ES/EN*, dimensions, available finishes or sizes
- Photos (several, each with crop hotspot and alt text *ES/EN*), with one marked as the cover
- Status: made to order, one of a kind, or sold
- Price shown or "price on request"
- Linked projects where the piece appears

**Projects** also get an "offers involved" field (design, window treatments, furniture) and links to any furniture pieces they contain.

**Testimonials**: quote *ES/EN*, name, location, linked project, permission checkbox

**Inquiries** (read-only for him): every form submission saved as a backup of the email

Built-in guard rails: image required with a minimum width of 2400 px, alt text required, iPhone HEIC files converted on upload, length limits on text fields, character counters on SEO fields, slug generated safely from accented names and locked once published (or a redirect created when it changes). Missing English text falls back to Spanish.

One trap to avoid: the webhook must call `revalidateTag(tag, { expire: 0 })`, not the default `'max'` profile. With `'max'`, the first visitor after a publish still sees the old version, and Alexis will think publishing failed.

### 8.3 Beyond the CMS

A CMS alone does not make him independent. He also needs:

1. **A working mailbox** on the chosen domain (Google Workspace or Zoho Mail), with MX, SPF, DKIM and DMARC records, so inquiry emails arrive and do not land in spam.
2. **Accounts in his name**, with you added as a collaborator: domain registrar, Vercel, Sanity, email provider, Resend, Google Search Console, Google Business Profile. If you leave, he keeps the site.
3. **The right hosting plan.** Vercel's free Hobby plan is for non-commercial use. A business site belongs on Pro or under your agency team. Check which plan this project is on.
4. **A Spanish editor guide**: one page plus a short screen recording. How to add a project, swap a photo, publish, undo.
5. **Photo guidance inside the CMS**: field descriptions that say which shape and size each slot wants.
6. **Analytics he can read**: access to Vercel Analytics, or a monthly summary email.
7. **A Google Business Profile** he manages, where real reviews come from.
8. **A short maintenance agreement**: what stays your job (new sections, code changes, dependency updates, incidents) and at what price.

## 9. What I need from Alexis

Send this list to him. Items marked **blocking** stop work until they arrive.

### Brand and identity
- [ ] **blocking** Logo lockup for Casa Garza × Alexis Garza, as SVG (plus white version for dark backgrounds)
- [ ] **blocking** Exact public name to use (for example "Casa Garza by Alexis Garza")
- [ ] Brand colours and fonts, if he has a guide (otherwise we keep the current palette)
- [ ] Favicon or monogram, if different from the logo
- [ ] Legal business name and RFC holder, for the privacy notice

### Domain, email and accounts
- [ ] **blocking** Which domain: `alexisgarza.com`, a Casa Garza domain, or both (who owns each today?)
- [ ] **blocking** Email address that should receive inquiries
- [ ] Access to the domain registrar (or invite you as a technical contact)
- [ ] WhatsApp Business number and the first message clients should send
- [ ] Phone number to publish (confirm +52 1 81 8656 4134)

### Contact and location
- [ ] **blocking** Studio address, or the wording to use if he works by appointment
- [ ] Service area (Monterrey, San Pedro Garza García, other cities, remote projects?)
- [ ] Office hours, if he wants them shown
- [ ] Google Maps link or Google Business Profile, if one exists

### About him
- [ ] Short bio in Spanish (background, training, years in practice, team size)
- [ ] Original portrait without the logo overlay, high resolution
- [ ] Two or three photos of him at work or of the studio
- [ ] How he works: confirm the three process steps or describe his real process
- [ ] Minimum project budget or typical range, if he is willing to show one
- [ ] Project types he really takes (residential only? hospitality? retail?)

### For each project
- [ ] **blocking** Client permission to publish (and whether to name the neighbourhood)
- [ ] **blocking** What he actually did on the project: full interior design, furniture, styling, or window treatments only
- [ ] Confirm name, city, year and size in m²
- [ ] Original photos at full resolution (2400 px or wider), not exported from Instagram or WhatsApp
- [ ] Close-up photos of the two or three key materials
- [ ] Photographer name, if credit is required
- [ ] Read and correct the project texts (they were written from the photos; every fact needs checking)
- [ ] Which project leads on the home page, and the order of the rest
- [ ] Any new projects to add, with the same information

### Services
- [ ] **blocking** The list of services he sells, in his words (interior design, window treatments, anything else such as styling or room refresh)
- [ ] Window treatment types he offers (curtains, blinds, shades, motorized systems) and the brands or suppliers he uses
- [ ] Whether the measuring visit is free, and which areas it covers
- [ ] A "from" price or minimum per service, if he is willing to show one
- [ ] Photos of window treatment work: close-ups of fabrics, mechanisms, finished installations
- [ ] How a window treatment job runs, step by step (visit, quote, fabrication time, installation)

### Furniture he designed
- [ ] **blocking** The list of pieces to show, and whether each is made to order, one of a kind, or sold
- [ ] For each piece: name, year, the story behind it, materials and finishes, dimensions
- [ ] Who makes the pieces (his own workshop, a local carpenter, a partner), and whether to credit them
- [ ] Good photos of each piece: one clean full view on a plain background or in a room, plus two or three details
- [ ] Whether to show prices or "price on request", and typical lead time
- [ ] Which projects each piece appears in

### Proof and credibility
- [ ] **blocking** Real press coverage, with links or scans, or confirmation that there is none yet
- [ ] Real awards, if any
- [ ] Two to four real client testimonials, with name, city and written permission
- [ ] Suppliers or brands he partners with, if he wants them shown

### Copy and language
- [ ] **blocking** Who writes or approves the Spanish text: Alexis, someone he trusts, or a translator you hire
- [ ] Approval of the English text once Spanish is final
- [ ] The tone he wants: "we" (studio) or "I" (personal)

### Inquiry form
- [ ] Which fields he wants (phone, city, budget, timeline, size, how they heard about him)
- [ ] The reply promise to show ("within two working days", or nothing)

### Social
- [ ] Confirm Instagram `@casa.garza_` and the Facebook page
- [ ] Any other profiles to link (Pinterest, TikTok, LinkedIn, Houzz)

## 10. Suggested order of work

1. Upgrade Next.js (C8), remove invented content (C3, C4) and unused assets. Same day, no input needed.
2. Get the blocking answers from section 9.
3. Mailbox and domain records, then the working form with WhatsApp fallback (C1, C2, U3, U5).
4. Brand lockup, favicon, metadata, robots, sitemap, share image, JSON-LD (T3, T4, T5).
5. Sanity content model and Studio in Spanish, then move all content into it (section 8).
6. Services page and Furniture section, built on the same content model, plus the new navigation and home blocks.
7. Spanish and English routing (T2), with Spanish copy in the CMS.
8. Privacy notice, conversion tracking, CI and smoke tests (C6, T6, T7).
9. Editor guide and account handover (8.3).
10. Professional photography as it becomes available.

## 11. Not in scope for now

- Blog or journal: no one owns the writing yet. Revisit after three months of CMS use.
- Instagram feed on the site: Meta retired the Basic Display API in December 2024. A maintained widget can come later.
- Booking calendar: WhatsApp and the form cover first contact.
- Online quote calculator for curtains and blinds: the measuring visit and WhatsApp quote come first. Revisit if volume justifies it.
- Online furniture shop with payments: pieces are shown with "ask about this piece". Revisit if he sells stock pieces regularly.

## Appendix: checks run

- `npm run lint`: clean. `npx tsc --noEmit`: clean. `next build`: 11 static pages, no warnings except a workspace-root note caused by the worktree's second lockfile.
- Pages checked in a browser at 1440 px and 375 px. No horizontal overflow on mobile.
- `dig alexisgarza.com`: A record present, no MX record.
- `robots.txt`, `sitemap.xml`, `opengraph-image`, `icon`: all return 404.
