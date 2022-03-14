export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'prodvd',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '@mdi/font/scss/materialdesignicons.scss', lang: 'scss' },
    { src: '@assets/scss/styles.scss', lang: 'scss' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/editor.js', mode: 'client' },
    '~/plugins/vuelidate.js',
    '~/plugins/axios.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/moment',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/dotenv',
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL,
  },

  i18n: {
    locales: [
      {
        code: 'en',
        name: 'Eng',
        iso: 'en-US',
        file: 'en.json',
      },
      {
        code: 'ru',
        name: 'Rus',
        iso: 'ru-RU',
        file: 'ru.json',
      },
      {
        code: 'uz',
        name: 'Uzb',
        iso: 'uz-UZ',
        file: 'uz.json',
      },
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    },
    lazy: true,
    langDir: 'i18n/',
    strategy: 'no_prefix',
    detectBrowserLanguage: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    host: '0.0.0.0',
  },
}
