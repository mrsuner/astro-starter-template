import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import compress from "astro-compress";

import siteConfig from "./src/config/site.js";

// https://astro.build/config
export default defineConfig({
  site: siteConfig.baseUrl,
  integrations: [
    tailwind({
    config: {
      // do not use the default base css
      applyBaseStyles: false
    }
  }), 
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    }), 
    image(), 
    compress({
      css: true,
      html: true,
      img: false,
      js: true,
      svg: false
    })
]
});