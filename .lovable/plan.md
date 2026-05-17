# AlibaBag Landing Page

Build a modern landing page for AlibaBag (handmade woven-mat handbags) with the exact layout structure of the Grapy reference, applied to a purple brand palette.

## Scope

Two sections on the home route (`src/routes/index.tsx`):
1. **Hero** — navbar + floating product, giant background wordmark, left badge stack + tagline, right photo card + floating "Local Craft" pill.
2. **Our Story** — two-image collage on the left, heading + paragraph + 3 stat items on the right.

Plus a shared `Navbar` component reused at top of hero.

## Design system

Update `src/styles.css` with the brand tokens (in `oklch`, mapped from the requested hex):
- `--background` light → soft gradient applied at hero level (`#FAFAFA` → `#C0C9EE`)
- `--primary` = `#6B21D6` (royal purple)
- `--accent` = `#898AC4` (mid)
- `--muted` = `#A2AADB` (soft)
- `--secondary` = `#C0C9EE` (light fill)
- `--foreground` = `#1A1A1A`
- Custom token `--shadow-bag` = soft purple drop shadow (`#6B21D6` @ ~50% alpha)

Typography: load **Plus Jakarta Sans** via Google Fonts link in `__root.tsx` head, set as default sans in styles.

## File changes

- `src/styles.css` — add brand tokens, font family, hero gradient utility, giant-wordmark utility.
- `src/routes/__root.tsx` — add Google Fonts links + update `<title>`/meta to AlibaBag, SEO description in Indonesian/English.
- `src/routes/index.tsx` — replace placeholder with `<Hero />` + `<OurStory />`.
- `src/components/Navbar.tsx` — brand mark, center nav pills (Home active), phone icon button + "Pesan Sekarang" CTA.
- `src/components/Hero.tsx` — full-viewport gradient section, giant `ALIBABAG` wordmark behind, centered floating bag image with purple shadow, left badge stack (Handcrafted / Eco-Friendly / Unik & Langka active / Lokal Pride 🇮🇩), left tagline "ANYAMAN LOKAL, GAYA GLOBAL", right rounded photo card, floating "Local Craft 🇮🇩" pill.
- `src/components/OurStory.tsx` — "TENTANG KAMI" eyebrow, main bag image + overlapping close-up texture image, "CRAFTED WITH PRIDE" heading, paragraph, 3 stat items row.

## Images

Generate 4 placeholder images into `src/assets/` (imported as ES6 modules):
1. `hero-bag.png` — woven purple handbag, transparent background, front view (for floating center).
2. `hero-person.jpg` — person holding a woven bag, soft studio light.
3. `story-bag.jpg` — side angle of the woven handbag.
4. `story-texture.jpg` — close-up of woven tikar texture.

## Layout structure

```text
HERO (min-h-screen, gradient bg)
├── Navbar (absolute top, max-w container)
├── Giant "ALIBABAG" wordmark (absolute bottom, behind, 30% opacity)
├── Center: floating bag image (z-10, drop-shadow purple)
├── Left col (absolute): badges stack (top) + tagline (bottom)
└── Right col (absolute): photo card (top) + Local Craft pill (bottom)

OUR STORY (py-24, bg #FAFAFA)
├── Left: main bag image + overlapping texture thumbnail
└── Right: eyebrow + heading + paragraph + 3 stat items
```

## Responsive

- Mobile: stack hero into a single column — badges → tagline → bag image → photo card; shrink wordmark via `clamp()`.
- Tablet/desktop: absolute-positioned overlay layout as described.
- Our Story collapses to single column under `md`.

## Out of scope (per request)

- No animations.
- No other sections (Keunggulan, Harga, Kontak nav links route to `#` placeholders for now).
- Real product photos to be swapped in later by user.
