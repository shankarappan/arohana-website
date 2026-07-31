# Arohana — Jazz Carnatic Fusion

Official website for Arohana, a Jazz–Carnatic fusion band from Aotearoa New Zealand.

Live site: [arohana.nz](https://arohana.nz)

## Development

```sh
npm install
npm run dev
```

## Production checks

```sh
npm run build
npm run test:sites
```

The public site deploys automatically from the `main` branch through GitHub Pages. Cloudflare manages DNS and HTTPS for `arohana.nz`; `www.arohana.nz` redirects to the apex domain.

## Adding music later

Place web-ready audio files in `public/audio/` and reference them from the listening section in `src/App.jsx`. Prefer compressed streaming formats and include track titles, credits, and accessible fallback text.
