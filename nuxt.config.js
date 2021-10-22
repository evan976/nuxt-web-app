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
      { hid: 'description', name: 'description', content: 'vuejs react nodejs 前端开发 技术博客 技术分享' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: {
    color: '#0081ff',
    height: '2px'
  },

  css: [
    '@/styles/initial.scss',
    '@/static/iconfont/iconfont.css',
    'swiper/css/swiper.css'
  ],

  plugins: [
    { src: '@/static/iconfont/iconfont.js', ssr: false },
    { src: '@/plugins/vue-awesome-swiper.js', mode: 'client' },
    { src: '@/plugins/filters.js', ssr: true },
    { src: '@/plugins/highlight', ssr: true },
    { src: '@/plugins/markdown', ssr: true }
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

  build: {
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
