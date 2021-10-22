import sitemap from './config/sitemap'

export default {

  mode: 'universal',

  head: {
    title: 'Evan | 欢迎来到Evan个人博客',
    htmlAttrs: {
      xmlns: 'http://www.w3.org/1999/xhtml',
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'author', content: 'wjh50940@163.com' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'keywords', name: 'keywords', content: '博客，个人网站，前端开发，vuejs，vue ssr，nodejs，nuxtjs' },
      { hid: 'description', name: 'description', content: '开源博客，Evan的个人博客网站，基于nuxt ssr首屏服务器端渲染，用于分享、交流、记录和学习。' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://hm.baidu.com/hm.js?793275cef10f8820022797165b499d8e' }
    ]
  },

  noscript: [{ innerHTML: 'This website requires JavaScript.' }],

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
    { src: '@/plugins/filters.js' },
    { src: '@/plugins/highlight' },
    { src: '@/plugins/markdown' },
    { src: '@/plugins/baidu' }
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
    '@nuxtjs/axios',
    '@nuxtjs/sitemap'
  ],

  sitemap,

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
