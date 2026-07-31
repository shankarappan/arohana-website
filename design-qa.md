# Arohana Design QA

- Source of truth: `/Users/shankar/Documents/Arohana Website/design-reference/option-1.png`
- Source dimensions: 864 × 1821 px
- Implementation URL: `http://localhost:4173/`
- Desktop viewport: 1440 × 1000 CSS px, device scale factor 1
- Mobile viewport: 390 × 844 CSS px, device scale factor 1
- State tested: default homepage, mobile navigation, audio disclosure, booking modal, booking success state

## Evidence

- Full-page comparison board: `/Users/shankar/Documents/Arohana Website/design-qa/compare.html`
- Combined comparison capture: `/Users/shankar/Documents/Arohana Website/design-qa/compare-clip-2-final.jpg`
- Final desktop hero: `/Users/shankar/Documents/Arohana Website/design-qa/implementation-desktop-hero-final-blended.png`
- Desktop page sections:
  - `/Users/shankar/Documents/Arohana Website/design-qa/implementation-section-a.png`
  - `/Users/shankar/Documents/Arohana Website/design-qa/implementation-section-b.png`
  - `/Users/shankar/Documents/Arohana Website/design-qa/implementation-section-c.png`
- Mobile evidence: `/Users/shankar/Documents/Arohana Website/design-qa/implementation-mobile-pass1.png`
- Seamless title, desktop: `/Users/shankar/Documents/Arohana Website/design-qa/title-seamless-final.png`
- Seamless title, mobile: `/Users/shankar/Documents/Arohana Website/design-qa/title-seamless-mobile-final.png`
- Jazz instrument section, desktop: `/Users/shankar/Documents/Arohana Website/design-qa/instrument-section-desktop.png`
- Jazz instrument section, mobile: `/Users/shankar/Documents/Arohana Website/design-qa/instrument-section-mobile-final.png`
- Bass guitar and Miruthangam update, desktop: `/Users/shankar/Documents/Arohana Website/design-qa/instrument-section-v2-desktop.png`
- Bass guitar and Miruthangam update, mobile: `/Users/shankar/Documents/Arohana Website/design-qa/instrument-section-v2-mobile.png`
- Three-movement visual redesign, desktop: `/Users/shankar/Documents/Arohana Website/design-qa/movement-section-redesign-desktop.png`
- Three-movement visual redesign, mobile: `/Users/shankar/Documents/Arohana Website/design-qa/movement-section-redesign-mobile.png`

The browser's full-page stitching duplicated fixed and viewport-bound elements, so the full implementation was captured as three bounded, contiguous desktop viewports and rendered together in the comparison board. The focused hero comparison uses a normal viewport capture.

## Fidelity review

- Typography: passed. Cormorant Garamond and Manrope reproduce the editorial serif/sans-serif contrast in the selected direction.
- Layout and spacing: passed. The hero hierarchy, two-line statement, audio deck, story rhythm, three-part philosophy, and booking close match the source. The implementation includes an intentional ensemble content section to support the supplied band brief and future artist profiles.
- Colour: passed. Charcoal, warm ivory, copper, and muted bronze remain consistent across all sections.
- Assets: passed. Purpose-made instrument photography and contour textures follow the reference direction. The supplied raster wordmark retains its original dark background; screen blending minimizes its edge until a transparent master logo is supplied.
- Instrument coverage: passed. Grand piano, saxophone, jazz drum kit, bass guitar, violin, and Miruthangam are all clearly visible and named. The mobile breakpoint preserves the full ensemble panorama instead of cropping either edge instrument.
- Copy: passed. The site preserves the confirmed 2023 Harmonizing Cultures debut and does not present WOMEX 2025 as an upcoming event.
- Responsive behaviour: passed. Navigation changes to a mobile menu, content stacks without clipping, touch controls remain legible, and reduced-motion preferences are respected.
- Accessibility: passed. Semantic regions, labelled controls, visible keyboard focus, modal isolation, and reduced-motion handling are present.
- Browser console: passed. No application errors were observed.

## Comparison history

1. Initial comparison found P2 issues: the desktop hero statement wrapped to three lines, the hidden mobile menu remained exposed to assistive technology, opening booking from the mobile menu left the menu active, and lower sections were too vertically loose.
2. Fixes applied: widened and stabilized the desktop hero headline, added menu visibility and `aria-hidden` handling, centralized booking opening so the menu closes first, isolated background regions while overlays are open, and tightened section spacing.
3. Post-fix comparison found no remaining P0, P1, or P2 issues. The supplied wordmark's embedded background is a P3 source-asset limitation and does not block release.

## Verification

- `npm run build`: passed
- `npm run test:sites`: passed, 4/4 tests

Final result: passed
