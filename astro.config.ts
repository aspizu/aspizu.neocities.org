import {defineConfig} from "astro/config"

export default defineConfig({
	devToolbar: {enabled: false},
	site: "https://aspizu.neocities.org",
	trailingSlash: "never",
	prefetch: {
		prefetchAll: true,
	},
	build: {
		format: "file",
		inlineStylesheets: "never",
	},
})
