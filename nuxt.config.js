const description = "New open-source donate system for community. Easy, fast and secure."
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "RepeatPay",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: description,
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "repeatpay.ga",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: description,
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "/icon.png",
      },
      /* Open-Graph */
      {
        hid: "og:title",
        name: "og:title",
        content: "RepeatPay"
      },
      {
        hid: "og:type",
        name: "og:type",
        content: "website",
      },
      {
        hid: "og:site_name",
        name: "og:site_name",
        content: "repeatpay.ga",
      },
      {
        hid: "og:description",
        name: "og:description",
        content: description,
      },
      {
        hid: "og:image",
        name: "og:image",
        content: "https://repeatpay.ga/icon.png",
      },
      /* Others */
      {
        hid: "theme-color",
        name: "theme-color",
        content: "#6762a6",
      },
    ].map((i) => {
      if (i.name && !i.property) i.property = i.name
      return i
    }),
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-windicss',
    '@nuxtjs/color-mode',
    'nuxt-webfontloader',
  ],
  webfontloader: {
    google: {
      families: ['Noto Sans:400,700'] //Loads Lato font with weights 400 and 700
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxtjs/firebase',
  ],
  colorMode: {
    classSuffix: ''
  },
  content: {
    liveEdit: false
  },

  firebase: {
    config: {
      apiKey: "AIzaSyCq8Rpf1sYs48W4YlU9X5uPmW5G34S2UfI",
      authDomain: "repeatpay-188a9.firebaseapp.com",
      projectId: "repeatpay-188a9",
      storageBucket: "repeatpay-188a9.appspot.com",
      messagingSenderId: "452437711242",
      appId: "1:452437711242:web:dd5cf6bb10c660d2e59073",
      measurementId: "G-5XG0T9X9BQ"
    },
    services: {
      auth: true,
      firestore: true
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
