import firebase from "./config/firebase"
import head from "./config/meta"

export default {

  rootDir: "./",
  srcDir: "src",
  ssr: true,
  components: true,

  // Firebase configuration is imported from config/firebase.js
  firebase,

  // Meta tags is imported from config/meta.js
  head,
  
  plugins: [],

  // Import global CSS files from here
  css: [],


  buildModules: [
    'nuxt-windicss',
    '@nuxtjs/color-mode',
    '@nuxtjs/dotenv',
    'nuxt-webfontloader',
  ],
  webfontloader: {
    google: {
      families: ['Noto Sans:400,700'] //Loads Lato font with weights 400 and 700
    }
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxtjs/firebase',
  ],
  colorMode: {
    classSuffix: '',
    preference: "dark",
  },
  content: {
    liveEdit: false
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
