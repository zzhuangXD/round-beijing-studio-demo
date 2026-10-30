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

Public GitHub Pages verification is recorded after publication. Only the new repository is changed; the original ROUND demo remains untouched.
