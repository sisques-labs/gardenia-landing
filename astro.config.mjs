// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site. Override `site`/`base` via env for a custom domain.
  site: process.env.SITE_URL ?? 'https://sisques-labs.github.io',
  base: process.env.BASE_PATH ?? '/gardenia-landing',
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
