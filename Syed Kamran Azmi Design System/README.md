# Syed Kamran Azmi — Design System

> Executive Construction Advisory · Shaping the Cities of Tomorrow

This design system powers the personal brand and consulting website of **Syed Kamran Azmi**, a senior construction & real-estate development executive with 40+ years of global experience. The brand positions him as a strategic advisor for developers, executives, and enterprises shaping the future of urban environments.

The aesthetic is **warm, earthy, editorial-retro** — a cream foundation, deep ink text, generous whitespace, and confident craft. Built on three colour ideas: **terracotta / clay** (the dominant primary — building materials, earth, culture), **cactus green** (the fresh secondary pop — growth, an architectural accent), and an optional **mustard** flourish, all over **cream**. A recurring **eight-point compass-star** (sun + compass: vision, navigation, global reach) is the signature mark. Editorial vintage serif headlines, grain texture, organic shapes. Premium, grounded, and unmistakably *not* a typical construction-firm site — "Terra".tectural, dynamic) and a **warm copper** (human warmth, building materials, cultural richness). Every element is intentional. Premium but approachable. The feeling should be "the work of someone shaping cities and the future" — not a typical construction-firm website.

---

## Sources

This system was built from a **written brand brief** only. No codebase, Figma file, or existing visual assets were provided. All foundations (color, type, spacing, components) were authored fresh to satisfy the brief. As a result:

- **Fonts** are loaded from **Google Fonts** (DM Serif Display, Sora, Montserrat). DM Serif Display is the editorial vintage serif (a free stand-in for the licensed *Briston / Self Modern* look from the moodboard). If licensed font files are supplied, drop them into `fonts/` and update `colors_and_type.css`.er later review feedback the headlines are now **Cormorant Garamond**.) If the user has licensed font files they prefer, they can drop them into `fonts/` and update `colors_and_type.css`.
- **Imagery** uses neutral placeholders (`<image-slot>` style boxes / labelled blocks). Real architectural photography and Syed's professional photo should replace these.
- **Icons** use the **Lucide** icon set via CDN (thin, geometric line icons that match the architectural-precision feel). See ICONOGRAPHY.

---

## The Person & The Story (context for copywriting)

- **Arc:** From Assistant Engineer (1985) → operations leader → strategic visionary / CEO.
- **Headline stats:** 40+ years · 5x revenue growth · international projects across 5 continents · 100+ projects · multinational teams.
- **Geographies:** Congo, Qatar, Pakistan, UAE, Ukraine and more.
- **Landmark projects:** Pointe Anglaise (Congo luxury residential), Doha Festival City, Hamad Medical City, high-rise towers in Islamabad.
- **Expertise:** Construction management & real-estate development; business & operations leadership; ready-mix concrete & profit-center management; P&L ownership; strategic planning & growth; workforce development & succession planning; contract negotiation & client relations; international procurement & quality control.
- **Brand pillars:** **CORE** (foundational operations expertise) · **URBAN** (city-scale vision) · **STRUCTURE** (precision, integrity, rigor).
- **Contact:** Phone/WhatsApp/Botim 00243 816 842 263 · syedkamranazmi@yahoo.com · linkedin.com/in/kamran-azmi

---

## CONTENT FUNDAMENTALS

**Voice:** Results-driven, visionary, confident without arrogance. The work speaks; the copy stays composed. Premium consultant — never salesy, never boastful. Warm and human underneath the precision.

- **Person:** Speaks in **third person** in narrative/bio ("Syed has delivered…", "He builds structures that…") and uses **"you / your"** to address the reader-client in CTAs and services ("Start *your* consultation", "Scale *your* operations"). Never "I/me."
- **Casing:**
  - Headlines (Instrument Serif, italic) use **Title Case or sentence case**, never all-caps. "Shaping the Cities of Tomorrow."
  - Eyebrows / labels / pillar names (Montserrat) are **ALL CAPS with wide tracking**: `CORE`, `URBAN`, `STRUCTURE`, `GLOBAL EXPERTISE`.
  - Body is sentence case.
- **Length & rhythm:** Punchy. Short declarative sentences. Lead lines are one breath. Pillar/service blurbs are 1–2 sentences max. Let whitespace carry weight.
- **Numbers as proof:** Stats are stated plainly and confidently — "40+ Years", "5x Revenue Growth", "5 Continents", "100+ Projects". Always with a `+` or `x` where it adds momentum. Pair a number with one noun, no fluff.
- **SEO language woven naturally** (never keyword-stuffed): *executive construction advisor, construction management consultant, international construction expert, real-estate development consultant, urban development consultant, shaping urban futures, building tomorrow's cities.*
- **Emoji:** **Never.** This is a premium, architectural brand. Use icons and typographic detail instead.
- **Example lines:**
  - Hero: "Shaping the Cities of Tomorrow" / "Executive Construction Advisory — 40+ Years of Global Urban Development Expertise"
  - CTA: "Start Your Consultation", "Schedule a Consultation"
  - Pillar (URBAN): "City-scale vision. Shaping metropolitan futures across five continents."
  - Project card: "Pointe Anglaise · Pointe-Noire, Congo · Luxury Residential"

---

## VISUAL FOUNDATIONS

**Overall feel:** Architectural precision meets editorial calm. An off-white canvas with deep charcoal type, generous whitespace, thin structural rules, and two disciplined accents. Restraint is the brand — color is a *scalpel*, not a *brush*.

- **Color usage:**
  - The base is **cream** (`--paper #F5F1ED`) with ink text (`#1A1A1A`); ~70% of any screen is cream/white + ink.
  - **Clay / terracotta** (`--teal` slot, `#C85A17`) is the dominant accent: CTAs, links, active states, the logo mark, key UI.
  - **Cactus green** (`--copper` slot, `#6B8E23`) is the secondary pop: section index numbers, ticks, active map pins, fresh architectural accents.
  - **Mustard** (`--mustard #D9A521`) is an optional small flourish. Dark sections use **deep cactus green** (`--blueprint #2C3A1C`).l:copper ratio.
- **Type:** Editorial pairing — a vintage high-contrast serif display (DM Serif Display, often with an italic accent word in clay) against geometric humanist sans body (Sora) and all-caps tracked labels (Montserrat).labels (Montserrat). Big serif headlines, airy line-height, tight letter-spacing on display sizes.
- **Spacing:** 4px base scale. Sections breathe with `--section-y` (72–160px vertical). Content maxes at 1240px with generous gutters. Whitespace is a feature, not a gap to fill.
- **Backgrounds:** Two-mode rhythm. Light sections on cream/`--mist`; dramatic **deep cactus-green dark sections** (`--blueprint #2C3A1C`) for the hero, Global Reach, engagement bar, contact, and footer — each carrying a faint animated drafting grid, pulsing teal/copper nodes, or a skyline motif. **No gradient fills** beyond image-tone placeholders and subtle protection scrims. The dark/light alternation is the site's dynamic backbone.
- **Structural lines:** A signature motif — **thin 1px rules** (in `--silver`, occasionally teal or copper) used as dividers, baselines, and a subtle blueprint/grid feel. A single animated teal hairline in the hero hints at architecture/drafting.
- **Borders & cards:** Cards are **near-sharp** (`--r-md` 4px, sometimes 8px), 1px `--border-soft` hairline, white surface, soft low shadow (`--shadow-sm`). On hover a card lifts (`--shadow-md`), a teal accent line slides in, optional copper detail. No heavy rounding, no thick colored left-borders, no glow.
- **Radii:** Mostly sharp. Buttons and chips use a signature **chamfered (cut-corner) shape** — never pills. Cards and icon tiles use a slight 4px. The brand leans rectilinear — buildings, not bubbles.
- **Buttons:** Chamfered dual-cut corners (architectural), uppercase Montserrat labels, a light sheen sweep and a gliding arrow on hover, click ripple. Clay primary, ghost (clay outline), and text variants.t-link variants.
- **Shadows:** Soft, low, cool-neutral and diffuse (see `--shadow-*`). Never harsh. Teal CTAs may carry a faint teal-tinted shadow on hover (`--shadow-teal`).
- **Imagery treatment:** Cool/neutral architectural photography, crisp natural light, minimal saturation. Optional subtle bottom-up dark protection gradient when text overlays an image. Professional portrait integrated tastefully, never gimmicky.
- **Motion:** Dynamic but purposeful. Fade-and-rise on scroll-into-view; animated stat counters; animated growth chart; pulsing map pins and hero nodes; a project ticker marquee; pointer-parallax on project cards; a custom geometric cursor; a vertical scroll-progress "build %" bar; button hover sweep + click ripple; success burst on form submit. Calm easing, no springy overshoot. `prefers-reduced-motion` respected.
- **Hover states:** Links/teal buttons darken to `--teal-700`; ghost buttons fill teal. Cards lift + reveal accent line. Transitions ~160–280ms `--ease`.
- **Press states:** Slight darken + 1px nudge down (no scale-down shrink on large elements; small controls may scale 0.98).
- **Transparency & blur:** Used sparingly — a frosted sticky header (white at ~80% with `backdrop-filter: blur`) once scrolled; image protection overlays. Otherwise opaque.
- **Layout rules:** Sticky translucent top nav. Strong left alignment with an editorial grid. Eyebrow → display headline → lead → content rhythm repeats. Section index numbers (01 / 02 / 03) in copper as a recurring structural device.

---

## ICONOGRAPHY

- **Set:** **Lucide** (https://lucide.dev) — thin, geometric, open line icons with a consistent 1.5–2px stroke. Their minimal, drafting-like quality matches the architectural-precision brand far better than filled or rounded-cartoon sets. Loaded via CDN (`lucide` UMD).
- **Version note:** The website kit pins Lucide to **`0.300.0`** because newer releases removed the `linkedin` brand glyph. Preview cards use `@latest` (they only use generic icons).
- **Stroke & size:** 1.75px stroke, `currentColor`, typical sizes 20/24/28px. Icons inherit text color — ink by default, **clay** when interactive/active, **cactus green** for the occasional accent.
- **Usage:** Sparingly and functionally — competency cards, service cards, contact rows, nav affordances, map/region markers. Icons support text; they never replace it and never crowd a layout.
- **Emoji:** Never used. **Unicode** is used only for typographic separators (middot `·`, em-dash `—`) in metadata lines.
- **Logo / mark:** The identity is an **eight-point compass-star** (`assets/star-mark.svg`) — sun + compass, for vision and global reach — paired with the full name in DM Serif Display and a Montserrat all-caps descriptor. Mark variations (4-point north star, radiant sun, seal/stamp) are in `preview/mark-options.html`. The star works as logo, bullet, divider tick, and loading motif.vided — the wordmark is the identity. See `assets/logo.svg`.
- **Substitution flag:** Lucide is a substitute for a bespoke icon set (none was provided). If a custom icon library is later supplied, replace the CDN reference and update this section.

---

## Index / Manifest

Root files:
- **`README.md`** — this file (context, content + visual foundations, iconography, manifest).
- **`colors_and_type.css`** — the source of truth for color + type tokens, the type scale, spacing, radii, shadows, and motion. Import this in any new artifact.
- **`SKILL.md`** — Agent-Skills-compatible entry point.
- **`assets/`** — `logo.svg` (wordmark). Drop real photography/portrait here as it arrives.
- **`preview/`** — design-system specimen cards (colors, palette directions, type, spacing, components, brand) shown in the Design System tab.
- **`ui_kits/website/`** — the interactive **multi-page** website recreation: `index.html` (homepage), `project.html` (project detail), `about.html`. See its own `README.md`.

### Fonts (Google Fonts)
- **Display:** DM Serif Display (editorial vintage serif; stand-in for licensed Briston / Self Modern)
- **Body:** Sora
- **Labels / eyebrows:** Montserrat

> **Font substitution flag:** loaded from Google Fonts, not licensed local files. If you have preferred licensed files, add them to a `fonts/` folder and swap the `@import` in `colors_and_type.css` for `@font-face`.

### Palette
The **Terra** direction: cream base + clay/terracotta primary + cactus-green secondary + ink text + optional mustard, with deep cactus-green dark sections. See `preview/brand-board.html` for the full board and `preview/mark-options.html` / `preview/serif-options.html` for mark and serif explorations.`; switching is just token values in `colors_and_type.css`.
