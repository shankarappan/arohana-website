# Arohana ensemble integration — design QA

## Evidence

- Source visual truth: the user's annotated portrait-layout screenshot (2872 × 1636 px), `design-reference/option-1.png` (864 × 1821 px), and the six supplied portrait sources.
- Combined before/after comparison: `design-qa/ensemble/qa-contact-sheet-comparison.png` (1440 × 900 px).
- Desktop implementation: `design-qa/ensemble/qa-contact-sheet-desktop.png` and `design-qa/ensemble/qa-contact-sheet-grid-desktop.png` (1440 × 900 px; CSS viewport 1440 × 900; device scale 1).
- Mobile implementation: `design-qa/ensemble/qa-contact-sheet-mobile.png` (390 × 844 px; CSS viewport 390 × 844; device scale 1).
- State: ensemble introduction and complete six-portrait contact sheet; the accepted live chapter and group image remain unchanged.

## Full-view comparison

The revised portrait section retains the selected reference's charcoal ground, copper rules, editorial typography, restrained image grading, and negative space. Replacing the irregular spread with a precise 3 × 2 contact sheet removes arbitrary hierarchy while keeping the section image-led and cinematic rather than turning it into conventional profile cards.

## Focused region comparison

- Portraits: all six supplied 4:5 portraits now have identical dimensions, crop rules, spacing, and visual weight. Faces remain fully visible and the overlaid numbers are removed.
- Desktop: three equal columns and two aligned rows eliminate the irregular vertical spread and shorten the section substantially.
- Mobile: two equal columns and three aligned rows preserve readable portrait size without horizontal overflow.

## Required fidelity surfaces

- Fonts and typography: passed. Existing Cormorant Garamond and Manrope hierarchy, weights, line heights, and small-label tracking are preserved.
- Spacing and layout rhythm: passed. Desktop uses a precise 3 × 2 grid; mobile uses a compact 2 × 3 grid. There is no arbitrary offset, size difference, or horizontal overflow.
- Colors and visual tokens: passed. Existing ink, paper, muted copy, copper accents, borders, and overlay opacity are reused.
- Image quality and asset fidelity: passed. All eight supplied photographs load, use appropriate responsive sizing, preserve faces, and remain free of stretching or broken assets.
- Copy and content: passed. No artist names or roles were invented; the section clearly identifies six musicians and leaves individual profiles for supplied content.

## Comparison history

1. Initial P2 finding: the staggered portrait spread created excessive negative space, inconsistent visual weight, and an unintended ranking effect; overlaid numbers added visual noise.
2. Fix: removed all portrait numbering and replaced the twelve-column stagger with an equal 3 × 2 desktop contact sheet and 2 × 3 mobile grid.
3. Post-fix evidence: `design-qa/ensemble/qa-contact-sheet-comparison.png`, `design-qa/ensemble/qa-contact-sheet-grid-desktop.png`, and `design-qa/ensemble/qa-contact-sheet-mobile.png` show equal crops, aligned rows, consistent spacing, no numbering, no broken images, and no overflow.

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
