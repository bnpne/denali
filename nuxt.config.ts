export default defineNuxtConfig({
  devtools: {enabled: false},
  modules: ['@nuxtjs/sanity'],
  pages: true,

  // sanity: {
  //   projectId: process.env.NUXT_PROJECT_ID,
  //   dataset: 'production',
  //   useCdn: false,
  //   apiVersion: '2023-05-03',
  // },
  build: {
    transpile: ['gsap', 'three'],
  },

  css: ['@/assets/styles/globals.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_functions.scss" as *;',
        },
      },
    },
  },

  compatibilityDate: '2024-07-02',
})