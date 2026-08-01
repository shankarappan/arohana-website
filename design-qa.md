# Arohana ensemble integration — design QA

## Evidence

- Source visual truth: `design-reference/option-1.png` (864 × 1821 px), plus the eight supplied band photographs listed in the user brief.
- Combined comparison: `design-qa/ensemble/qa-combined-comparison.png` (1440 × 2582 px).
- Desktop implementation: `design-qa/ensemble/qa-live-stage-desktop.png`, `design-qa/ensemble/qa-ensemble-portraits-desktop.png`, and `design-qa/ensemble/qa-ensemble-group-caption-desktop.png` (1440 × 900 px; CSS viewport 1440 × 900; device scale 1).
- Mobile implementation: `design-qa/ensemble/qa-live-stage-mobile.png`, `design-qa/ensemble/qa-ensemble-mobile.png`, and `design-qa/ensemble/qa-ensemble-mobile-group.png` (390 × 844 px; CSS viewport 390 × 844; device scale 1).
- State: live chapter, ensemble introduction, portrait constellation, and ensemble group image.

## Full-view comparison

The new sections retain the selected reference's charcoal ground, copper rules and labels, editorial Cormorant display typography, compact Manrope supporting copy, restrained image grading, and generous negative space. The live panorama is treated as full-bleed stage photography with a dark editorial text veil. The portrait section extends the established language rather than introducing card UI, borders, rounded corners, or a new palette.

## Focused region comparison

- Live chapter: the supplied 7008 × 3178 stage image remains sharp after web optimization and preserves all six visible performers at desktop width. The mobile crop prioritizes the Carnatic centre of the ensemble while retaining the stage atmosphere.
- Portraits: all six supplied 4:5 portraits preserve their original framing and facial detail. Staggered scale creates hierarchy without cropping faces or changing the source backgrounds.
- Group photograph: the full ensemble remains visible on desktop and mobile. The mobile presentation intentionally preserves the complete group rather than using a tighter crop that would remove people.

## Required fidelity surfaces

- Fonts and typography: passed. Existing Cormorant Garamond and Manrope hierarchy, weights, line heights, and small-label tracking are preserved.
- Spacing and layout rhythm: passed after one correction. Desktop negative space is intentional and mobile uses a stable two-column rhythm with no horizontal overflow.
- Colors and visual tokens: passed. Existing ink, paper, muted copy, copper accents, borders, and overlay opacity are reused.
- Image quality and asset fidelity: passed. All eight supplied photographs load, use appropriate responsive sizing, preserve faces, and remain free of stretching or broken assets.
- Copy and content: passed. No artist names or roles were invented; the section clearly identifies six musicians and leaves individual profiles for supplied content.

## Comparison history

1. Initial P2 finding: HTML source dimensions caused narrower portrait figures and the group image to retain fixed pixel heights, producing black blocks and excessive vertical space.
2. Fix: added natural responsive height behavior and top alignment for each portrait figure.
3. Post-fix evidence: `design-qa/ensemble/qa-ensemble-portraits-desktop.png` and `design-qa/ensemble/qa-ensemble-mobile.png` show natural aspect ratios, intentional stagger, no stretching, no broken images, and no horizontal overflow.

## Findings

No actionable P0, P1, or P2 findings remain.

## Follow-up polish

- P3: individual names, instruments, and profiles can be layered into the portrait sequence once the band supplies verified content.

## Verification

- Primary navigation jumps to Live and Artists were tested on desktop and mobile.
- Mobile menu open/close and section navigation were tested.
- All eight new images loaded successfully.
- No browser console errors or warnings were present.
- Production build and hosting tests passed.

final result: passed
