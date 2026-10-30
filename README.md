# ROUND — Beijing

A new studio homepage for ROUND-Beijing, built around the photographic scale, typography and interactions of [Dennis Snellenberg's portfolio](https://dennissnellenberg.com/).

**Demo:** https://zzhuangxd.github.io/round-beijing-studio-demo/

## Content

All studio information, activity descriptions, original notes and photographs come from the user-designated [ROUND original demo](https://zzhuangxd.github.io/round-beijing-demo/#flower) and its [public repository](https://github.com/zzhuangXD/round-beijing-demo). The source catalog was collected on 2026-10-27 and contains 17 activity themes, 52 notes and 228 original static photographs/poster images. Thumbnails and existing poster derivatives are also kept locally.

The site does not invent members, clients, contact information, dates or availability. Booking links point to ROUND's original Xiaohongshu profile. Historical prices and sessions are clearly presented as source records, with new arrangements subject to organizer confirmation. The source provides static images, not playable video files.

## Experience

- Full-viewport activity photography and direction-aware oversized marquee.
- Magnetic circular controls, rising button fills and a curved side menu.
- Cursor-following project previews on desktop; explicit images and touch controls on mobile.
- Scroll-driven photo ribbons, a curved footer reveal and route transitions.
- All 17 activities, original source links, image galleries with keyboard/swipe navigation, and 52 searchable notes.
- Keyboard focus, menu focus containment, reduced-motion support and an explicit pause control.

No third-party runtime, analytics, cookies, remote font requests or build dependencies. Albert Sans and a Noto Sans SC variable subset are self-hosted under their included SIL Open Font Licenses. The Chinese subset covers the current catalog and interface copy. Original image provenance is preserved in metadata or accompanying sidecars and listed in [docs/asset-provenance.json](docs/asset-provenance.json).

## Run

Node.js 20 or later:

```sh
npm run dev
# http://127.0.0.1:4173
npm run check
npm run build
```

`public/` is the complete website. `scripts/build.mjs` validates every referenced source image, checks the catalog counts and copies the site to `dist/`. All asset paths are relative so the site works under a GitHub Pages project prefix.

## Publish

The `main` branch contains the project. The `gh-pages` branch contains the contents of `public/`; GitHub Pages serves its root. No secrets or account credentials belong in this repository.

## Validation

See [docs/QA.md](docs/QA.md) for browser checks, known content limitations and viewport coverage. The page was inspected with ego lite at actual CSS widths of 1440px, 390px and 320px.
