export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Kumunite-Frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/main',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: "https://jsonplaceholder.typicode.com/"
  },

  // auth module config
  auth: {
    strategies: {
      google: {
        _scheme: 'oauth2',
        authorization_endpoint: 'https://accounts.google.com/o/oauth2/auth',
        userinfo_endpoint: 'https://www.googleapis.com/oauth2/v3/userinfo',
        scope: ['openid', 'profile', 'email'],
        // access_type: undefined,
        // access_token_endpoint: undefined,
        response_type: 'token',
        token_type: 'Bearer',
        redirect_uri: "https://localhost:3000/index",
        client_id: process.env.GOOGLE_CLIENT_ID,
        token_key: 'access_token',
        state: 'UNIQUE_AND_NON_GUESSABLE'
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
