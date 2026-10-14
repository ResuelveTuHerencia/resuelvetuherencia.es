import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://resuelvetuherencia.es',
  // URLs sin barra final: coinciden con los enlaces internos, el sitemap y los canonical
  trailingSlash: 'never',
  adapter: vercel(),
  integrations: [
    tailwind(),
    // Las anclas de la home (/servicios, /faq...) canonicalizan a "/": no se listan en el sitemap
    sitemap({
      filter: (page) => !/\/(inicio|servicios|herramientas|sobre-nosotros|faq)$/.test(page),
    }),
  ]
});
