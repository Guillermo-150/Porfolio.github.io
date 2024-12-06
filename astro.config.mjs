// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  base:'/Porfolio.github.io/',
  integrations: [tailwind()]
});