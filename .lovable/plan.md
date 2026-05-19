# Navbar Scroll Transformation

Refactor `src/components/Navbar.tsx` so it reacts to page scroll:

- **Top of page (scrollY === 0):** current layout — Logo (left), nav pill (center), phone icon + "Pesan Sekarang" button (right) — all visible, transparent background.
- **After scroll (scrollY > 20px):** the **center nav pill** transforms into a long rounded-rectangle "floating capsule" — slightly more compact, white/blur background, subtle shadow, `rounded-full` (not too round visually because it's a long shape), centered horizontally near the top with a small top offset.

## Layout split

Break the navbar into three independent pieces so each can animate separately:

1. **Logo** — stays fixed top-left, unchanged on scroll (no transform applied).
2. **Nav pill (center)** — the shape that morphs on scroll (background, shadow, padding, width).
3. **CTA group (phone icon + "Pesan Sekarang")** — extracted into its own absolutely-positioned wrapper top-right. Hidden initially after scroll, then slides in from above.

## Scroll behavior

- Add a `useEffect` with a `scroll` listener (passive) that toggles an `isScrolled` boolean when `window.scrollY > 20`.
- Optionally hide CTA group when `!isScrolled` is false at very top → actually: per request, CTAs always present at top; after scroll they re-enter with animation. Simplest interpretation: keep CTAs visible at top, and **on transition to scrolled state** play a 1s slide-down + fade-in animation on the CTA group.

## Animations

Use Tailwind/CSS transitions (no new deps):

- Nav pill: `transition-all duration-500 ease-out`; scrolled state adds `bg-white/70 backdrop-blur-md shadow-lg px-3 py-1.5` and a small `translate-y` offset.
- CTA group: when `isScrolled` becomes true, apply a class that runs a 1s keyframe animation `translateY(-100%) opacity-0 → translateY(0) opacity-1`. Define a custom keyframe (e.g. `animate-slide-down-1s`) inline via Tailwind arbitrary `animate-[slideDown_1s_ease-out]` and add the `@keyframes slideDown` to `src/styles.css`.
- Logo: no animation, no transform.

## Files touched

- `src/components/Navbar.tsx` — split into 3 absolutely-positioned blocks inside the existing `<nav>` wrapper; add scroll state + handler.
- `src/styles.css` — add `@keyframes slideDown` (translateY(-120%) → translateY(0), opacity 0 → 1).

No changes to colors, links, or any other component.
