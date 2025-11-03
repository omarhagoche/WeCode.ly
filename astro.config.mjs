import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://omarhagoche.github.io/WeCode.ly/",
  base: "/WeCode.ly/",
  integrations: [tailwind()],
  vite: {
    ssr: {
      noExternal: ["lucide-astro"],
    },
  },
});
