# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Arohana design direction

- The selected visual target is `design-reference/option-1.png`.
- Preserve the cinematic charcoal-and-copper art direction, editorial serif display type, tactile instrument photography, restrained motion, and clear listen/booking pathways.
- Keep the full Arohana title mark prominent in the hero while preserving breathing room around the editorial headline.
- On mobile, center the hero title mark independently of the left-aligned hero copy and its padded content column.
- Artist portraits, individual profiles, and social URLs are intentionally deferred until the band supplies them.
- The public listening section contains only `Rasika - Arohana Original` and `Madras Mail - Arohana Original` unless the band requests another release.
- Use `info@arohana.nz` for public booking enquiries.
- Treat WOMEX 2025 as a past date, not an upcoming event.
- The public source repository is `https://github.com/shankarappan/arohana-website`.
- Production is published from `main` through GitHub Pages at `https://arohana.nz`; Cloudflare manages DNS and edge HTTPS, and `https://www.arohana.nz` redirects to the apex domain.
- Future song files should use `public/audio/` with web-ready compressed formats; keep original masters outside the public repository.
