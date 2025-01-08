export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/style/main.scss"],
  modules: ["@nuxtjs/storybook"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
          additionalData: `
            @use "/style/foundations/_variables.scss" as*;
            @use "/style/foundations/_mixins.scss" as*;
            @use "/style/foundations/_functions.scss" as*;
          `,
        },
      },
    },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  build: {
    transpile: ["gsap"],
  },

  storybook: {
    // Options
    url: "http://localhost:6006",
    port: 6006,
  },
});
