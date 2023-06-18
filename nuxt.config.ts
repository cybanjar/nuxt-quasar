// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL 
    }
  },
  modules: ['nuxt-quasar-ui'],
  quasar : {
    plugins: ['Notify', 'Loading'],
    extras : { fontIcons: ['material-icons'] },
  },
  css: ['@/assets/css/app.scss'],
})
