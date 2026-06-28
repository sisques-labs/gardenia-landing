# Gardenia — Landing page

Marketing landing page for [Gardenia](https://github.com/sisques-labs/gardenia-web),
the gardening companion app. Built with Astro 7 and Tailwind CSS v4, reusing the
Gardenia design system (editorial palette, Newsreader / DM Sans / Caveat fonts)
so the landing matches the product.

## Features

- **Bilingual** — English (`/`) and Spanish (`/es/`) with an in-header language toggle.
- **Light / dark theme** — toggle in the header, persisted in `localStorage`, with a
  no-flash inline script and OS-preference fallback. Mirrors the web's `html.dark` convention.
- **Design system parity** — `src/styles/{theme,palettes,components}.css` are ported from
  `gardenia-web/src/design-system`, so colours and components stay in sync.

## Project structure

```text
src/
├── components/      # Header, Hero, Features, HowItWorks, CTA, Footer, toggles, Icon
├── i18n/ui.ts       # en/es dictionaries + locale helpers
├── layouts/         # Layout.astro (fonts, meta, theme bootstrap)
├── pages/
│   ├── index.astro  # English (default locale, served at /)
│   └── es/index.astro
└── styles/          # Ported Gardenia design system + Tailwind entry
```

## Commands

| Command        | Action                                       |
| :------------- | :------------------------------------------- |
| `pnpm install` | Install dependencies                         |
| `pnpm dev`     | Start the dev server at `localhost:4321`     |
| `pnpm build`   | Build the production site to `./dist/`       |
| `pnpm preview` | Preview the build locally                    |

## Deployment

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys to
**GitHub Pages** on every push to `main`. To enable it, set
**Settings → Pages → Build and deployment → Source** to **GitHub Actions**.

The site is configured for a project page at `https://sisques-labs.github.io/gardenia-landing/`
via `site` / `base` in `astro.config.mjs`. For a custom domain, override them with the
`SITE_URL` and `BASE_PATH` environment variables (e.g. `BASE_PATH=/`).
