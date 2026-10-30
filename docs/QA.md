# Validation

## Local browser

Tested with ego lite, using its documented Page and CDP APIs. Browser zoom was measured and compensated so checks use actual CSS viewport widths, not assumed screenshot dimensions.

- 1440 × 1000 desktop: hero, full homepage, cursor-following preview, magnetic controls, navigation menu and footer.
- 390 × 844 and 320 × 844: hero, menu open/close, complete homepage, activities, about, contact and project detail layouts. No horizontal document overflow.
- Menu links route to the expected page and release the scroll lock. Background content is inert while the menu is open; Escape closes it.
- Flower project gallery opens with 19 images, advances from 1 / 19 to 2 / 19 and closes back to its opener.
- Searching 串珠 finds 7 source notes. A nonexistent search shows an explicit empty state.
- The contact action points to the verified ROUND Xiaohongshu account in a new tab.
- All 17 project routes were opened at 320px; each showed its own title, source link and gallery with no horizontal overflow.
- Category filtering and list view were verified. Reduced motion keeps the marquee static and disables the page wipe.
- Self-hosted Albert Sans and the licensed ROUND Sans SC Chinese subset loaded at all three widths.
- The keyboard skip link focuses the main content without changing the route; clicking the current Home link returns to the page top.
- No captured runtime errors during the tested routes.
- Build verifies 17 activity themes, 52 source notes and 472 local image references. Provenance scan covers 492 shipped rasters with none missing.

## Content limits

The source snapshot was collected on 2026-10-27. It has static images, including stills from Live Photos, but no saved video footage. The site therefore uses genuine photographs and code-driven interactions. New sessions, dates, prices and booking availability must be confirmed with the original organizer. Xiaohongshu may require sign-in in its own service; the local galleries and note text remain readable without that service.

## Deployment

Published and browser-verified on 2026-10-30:

- Demo: https://zzhuangxd.github.io/round-beijing-studio-demo/
- Repository: https://github.com/zzhuangXD/round-beijing-studio-demo
- GitHub Pages source: `gh-pages`, `/`; build status `built`, no build error.
- Deployed static commit: `5803a3cf389aaca3abd694a928f4139b32a7fd6a`.
- Public-site ego lite receipt: [qa/public.json](../qa/public.json).
- Live checks repeated at actual widths 1440, 390 and 320: cursor preview, menu open/close and focus containment, all 17 activity cards, photo viewer next action, notes search and verified contact link. No captured runtime errors, failed image loads or failed resource responses. Fonts loaded successfully; no horizontal overflow.
- Local visual evidence is retained in `.impeccable/review/`, including `live-desktop.png`, `live-mobile.png` and `live-user-320.png`. Screenshot binaries are intentionally excluded from the source repository.

Only the new repository is changed; the original ROUND demo remains untouched.

## Enlarged activity preview

Following the user’s screenshot feedback, the fixed 360px preview now scales with the screen. Local ego lite checks cover 1440 × 1000 (518px preview), 3600 × 1440 (1008px preview), and the unchanged 390px inline-photo layout. Preview frames stay within the viewport; the build and local media validation pass.
