import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// One locale per build. SITE_LOCALE is set per Cloudflare Pages project.
const locale = process.env.SITE_LOCALE === 'en' ? 'en' : 'it';
const domains = { it: 'https://loscovo.it', en: 'https://scovo.io' };

export default defineConfig({
  site: domains[locale],
  trailingSlash: 'never',
  build: { format: 'file' },
  vite: {
    plugins: [tailwindcss()],
    define: {
      __LOCALE__: JSON.stringify(locale),
      // Test hook only: comma-separated page keys to treat as published.
      __FORCE_PUBLISH__: JSON.stringify(process.env.FORCE_PUBLISH ?? ''),
    },
  },
});
