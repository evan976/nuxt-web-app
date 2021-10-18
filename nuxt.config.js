export default {

  mode: 'universal',

  head: {
    title: 'nuxt-web-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '@/styles/initial.scss',
    '@/static/iconfont/iconfont.css',
    'swiper/css/swiper.css'
  ],

  plugins: [
    { src: '@/static/iconfont/iconfont.js', ssr: false },
    { src: '@/plugins/vue-awesome-swiper.js', ssr: false }
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: [
      '@/styles/variables.scss',
      '@/styles/mixins.scss'
    ]
  },

  modules: [
    '@nuxtjs/axios'
  ],

  axios: {},

  build: {}
}
