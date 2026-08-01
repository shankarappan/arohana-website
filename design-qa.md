# Arohana ensemble group photograph — design QA

## Evidence

- Source visual truth: the user's group-image layout screenshot, `/var/folders/n2/d96307fd2c91hg5g4xt_f24m0000gn/T/codex-clipboard-d0e63c03-968a-49e8-a085-c724e7d6d155.png` (3100 × 1628 px), plus the supplied 7008 × 4672 px ensemble photograph.
- Combined before/after comparison: `design-qa/ensemble/qa-group-banner-comparison.png` (1440 × 900 px).
- Desktop implementation: `design-qa/ensemble/qa-group-banner-desktop.png` (1440 × 900 px; CSS viewport 1440 × 900; device scale 1).
- Mobile implementation: `design-qa/ensemble/qa-group-banner-mobile.png` (390 × 844 px; CSS viewport 390 × 844; device scale 1).
- State: the ensemble group image immediately after the six-portrait grid and before the instrument section.

## Full-view comparison

The previous 3:2 photograph floated as a right-aligned inset and devoted most of its visible area to empty black stage ceiling. The revised treatment aligns exactly with the portrait grid and uses the photograph as a full-width cinematic transition into the instrument section. The ensemble is now the clear subject, and the compact strip restores the section's editorial rhythm.

## Focused region comparison

- Desktop: the 21:9 crop retains every person while removing most unused ceiling and floor. A restrained bottom gradient supports an integrated caption without creating a separate card or frame.
- Mobile: the image returns to its complete 3:2 composition so the wide group is not cut off. The caption moves into a compact panel below the photograph, and the section remains within the 390 px viewport without horizontal overflow.

## Required fidelity surfaces

- Fonts and typography: passed. The existing Cormorant Garamond caption and Manrope metadata hierarchy are preserved, with no new type style introduced.
- Spacing and layout rhythm: passed. The group image now shares the portrait grid's full width; the oversized floating inset and empty ceiling are removed.
- Colors and visual tokens: passed. Existing charcoal, copper rules, paper text, and muted metadata colors are reused.
- Image quality and asset fidelity: passed. The supplied photograph remains unstretched and sharp. The desktop crop keeps all ensemble members visible; mobile preserves the complete source composition.
- Copy and content: passed. The understated ensemble caption remains unchanged, and no identities or roles were invented.

## Comparison history

1. Initial P2 finding: the full 3:2 image created a dominant empty ceiling, while its 92%-wide right-aligned inset looked detached from the portrait grid.
2. Fix: replaced the inset with a full-width 21:9 desktop crop focused at 64% vertical position, integrated the caption over a restrained gradient, and added a complete 3:2 mobile treatment with caption below.
3. Post-fix evidence: `design-qa/ensemble/qa-group-banner-comparison.png`, `design-qa/ensemble/qa-group-banner-desktop.png`, and `design-qa/ensemble/qa-group-banner-mobile.png` show the tighter hierarchy, full subject visibility, and responsive treatment.

## Findings

No actionable P0, P1, or P2 findings remain.

## Follow-up polish

- P3: the caption could later be replaced with the verified event or performance name if the band wants the group photograph to carry documentary context.

## Verification

- Desktop and mobile breakpoints were rendered in the in-app browser.
- The group image loaded successfully at both breakpoints.
- Desktop and mobile layouts show no horizontal overflow.
- No browser console errors or warnings were present.
- Production build and hosting tests passed.

final result: passed
