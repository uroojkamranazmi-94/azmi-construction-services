# Website UI Kit — Syed Kamran Azmi

A high-fidelity, interactive **multi-page** recreation of the *Executive Construction Advisory* website — projects-first, editorial, and dynamic with a "blueprint" visual language. Built from small, reusable React (Babel JSX) components on the shared design tokens.

## Run it
Open `index.html` (homepage). Pages link to each other:
- `index.html` — homepage
- `project.html?id=<project-id>` — project detail (opened from any project card / modal)
- `about.html` — about / profile

Each page loads React + Babel + Lucide (pinned `0.300.0`) from CDN, then `styles.css` (tokens), `site.css` (shared chrome + homepage), and on detail/about also `page.css`.

## Files
| File | Contents |
|---|---|
| `styles.css` | Design tokens (copy of root `colors_and_type.css`) |
| `site.css` | Shared chrome (nav, footer, cursor, scroll-progress, buttons) + homepage sections |
| `page.css` | Project-detail + About page styles |
| `core.jsx` | Primitives: `Eyebrow`, `SectionHead`, `Button` (ripple), `Counter`, `Reveal` (all resilient), `Photo`, `Cursor`, `ScrollProgress` |
| `data.jsx` | Shared `PROJECTS` array + filter lists |
| `chrome.jsx` | `Nav` (minimize + active-section underline, light-over-dark) + `Footer` |
| `home.jsx` | `Hero` (blueprint grid, pulsing nodes, skyline, ticker), `FeaturedProjects` (carousel + live search + sector filter + masonry), `ProjectCard` (hover parallax), `ProjectModal` (gallery + animated stats) |
| `home2.jsx` | `Services` + **Build-Your-Engagement** selector, `GlobalReach` (2D dot-grid map + clickable pins + decade filter + animated regional stats), `Competencies` (skill bars), `Contact` (form + success burst) |
| `detail.jsx` | `ProjectHero` (parallax), `ProjectStats`, `ProjectGallery`, `ProjectOverview`, `RelatedProjects`, `ProjectCTA` |
| `about.jsx` | `AboutHero`, `Bio`, `GrowthChart` (animated 1x→5x bars), `Timeline`, `Credentials` |

## Interactions implemented
- **Custom geometric cursor** (dot + lagging ring that swells on interactive elements; auto-disabled on touch).
- **Scroll-progress** vertical "build %" indicator.
- **Nav** minimizes on scroll, frosts, and highlights the active section with a teal underline; light text over dark heroes, dark when scrolled.
- **Hero**: animated blueprint grid, pulsing teal/copper nodes, skyline bars, project ticker marquee, animated stat counters.
- **Featured Projects** (projects-first): auto-rotating carousel (pause on hover), **live search**, sector **filter chips**, **masonry** grid with per-card pointer **parallax**, click → **modal** with image gallery + animated stat counters + "View Full Project".
- **Services**: selectable cards feed a **Build-Your-Engagement** bar that composes a scope and pre-fills the contact form.
- **Global Reach**: stylized dot-grid map with pulsing **clickable pins**, decade timeline filter, animated regional stats.
- **Contact**: form with a success **burst animation**.
- **Project detail**: parallax hero, swappable gallery + thumbnails, animated stats, related projects.
- **About**: scroll-triggered **growth chart** animating to 5x, career timeline, credentials.
- Buttons: chamfered cut-corner shape, hover light-sweep, gliding arrow, click **ripple**.

## Notes & placeholders
- All imagery is placeholder (tone-gradient "blueprint" panels with a Lucide glyph). Replace with real architectural photography + Syed's portrait.
- The map is an abstract dot-grid with positioned pins — not a geographic map. Swap for real cartography if desired.
- Icons: **Lucide** pinned to `0.300.0` (newer releases dropped the `linkedin` brand glyph).
- Cosmetic recreation, not production code — components favor clarity over completeness.
