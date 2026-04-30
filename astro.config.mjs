import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gylfinn.github.io',
  base: '/t5',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
