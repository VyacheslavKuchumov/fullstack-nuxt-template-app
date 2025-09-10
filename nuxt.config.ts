// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/devtools',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxt/scripts',
    'pinia-plugin-persistedstate',
    '@vueuse/nuxt',
    '@vee-validate/nuxt',
    '@prisma/nuxt'
  ]
})