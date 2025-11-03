import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://wecode.ly/",
  base: "/",
  integrations: [tailwind()],
  vite: {
    ssr: {
      noExternal: ["lucide-astro"],
    },
  },
});
