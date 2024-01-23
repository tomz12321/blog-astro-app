import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://grand-sorbet-7803bb.netlify.app/",
  integrations: [preact()]
});