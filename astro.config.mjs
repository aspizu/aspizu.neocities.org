// @ts-check
import gemtext from "astro-gemtext"
import {defineConfig} from "astro/config"

// https://astro.build/config
export default defineConfig({
    integrations: [gemtext({layout: "/src/layouts/Layout.astro"})],
    prefetch: {
        defaultStrategy: "load",
        prefetchAll: true,
    },
})
