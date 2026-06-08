// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// IMPORTANTE: cuando se defina el dominio final, actualizar `site`.
// Es clave para SEO: genera URLs absolutas en sitemap, canonical y OpenGraph.
const SITE_URL = 'https://www.relengcorp.com';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  integrations: [
    mdx(),
    sitemap({
      i18n: undefined,
      changefreq: 'monthly',
      priority: 0.7,
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    // Permite optimización de imágenes locales con sharp
    responsiveStyles: true,
  },
});
