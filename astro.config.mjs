// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // Si más adelante añades MDX, sitemap, etc. → ponlas aquí en "integrations: []"
});
