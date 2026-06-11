---
name: syed-kamran-azmi-design
description: Use this skill to generate well-branded interfaces and assets for Syed Kamran Azmi — Executive Construction Advisory (a premium personal/consulting brand for a 40-year global construction & urban-development executive), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

Key files:
- `README.md` — brand context, content + visual foundations, iconography, manifest.
- `colors_and_type.css` — color + type tokens, type scale, spacing, radii, shadows, motion. Import or copy this into any new artifact.
- `preview/` — design-system specimen cards.
- `assets/` — wordmark logo (drop real photography here as it arrives).
- `ui_kits/website/` — interactive **multi-page** recreation of the consultant website (homepage, project detail, about) — React/Babel JSX components + `site.css`/`page.css`; see its own README.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

Brand essentials to honor:
- Off-white canvas, deep charcoal text, **teal** primary accent, **copper** used sparingly (~4:1 teal:copper).
- Off-white **cream** base (`#F5F1ED`), ink text (`#1A1A1A`); **clay/terracotta** (`#C85A17`) dominant primary; **cactus green** (`#6B8E23`) secondary pop; optional **mustard** (`#D9A521`); deep cactus-green (`#2C3A1C`) dark sections.
- Type: **DM Serif Display** editorial vintage serif (italic accent word in clay), **Sora** body, **Montserrat** all-caps labels/eyebrows.
- Mark: **eight-point compass-star** (`assets/star-mark.svg`) — logo, bullet, divider, motif.
- Two-mode rhythm: cream light sections alternating with deep cactus-green dark sections carrying faint sand grids and skyline motifs; warm film-grain + organic shapes.
- Rectilinear/architectural: sharp + **chamfered cut-corner** buttons (never pills), thin structural hairlines, generous whitespace.
- Tone: results-driven, visionary, confident without arrogance; third person for bio, "you/your" for the client; **no emoji**.
- Icons: Lucide (pin `0.300.0` if you need the `linkedin` glyph).

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
