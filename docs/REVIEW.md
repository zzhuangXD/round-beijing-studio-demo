## verdict

1. TYPE / Chinese display face — resolved. `public/style.css` now declares the self-hosted variable `ROUND Sans SC` face, and `public/index.html` preloads `RoundSansSC.woff2`. The refreshed desktop, 390px and 320px captures retain the open sans proportions, restrained weight and reference hierarchy. The 320px work heading stays on its intended two lines without an orphan character. `qa/review-fixes.json` confirms successful font loading and no horizontal overflow at all three widths.
2. Skip-link and same-route Home navigation — resolved. The focused QA receipt confirms the skip-link keeps `#home`, focuses `main` and preserves the hero. Re-selecting Home returns scroll position to zero. The corresponding handlers in `public/app.js` implement both behaviors.

No material regressions observed in the affected recaptures. Required captures remain present with valid dimensions; refreshed full-page captures retain the document top, content and footer.

## remaining

Clear. This ship verdict covers the scored fixes, not a new full-surface review.

Disposition and scope recorded after reviewing the supplied files and recaptures without browser use.

disposition: ship
