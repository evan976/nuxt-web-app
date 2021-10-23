import sitemap from './config/sitemap.config'
import { meta, baiduKey } from './config/app.config'

export default {

  mode: 'universal',

  head: {
    title: `${meta.title} | ${meta.subTitle}`,
    titleTemplate: '%s - evanone.site',
    htmlAttrs: {
      xmlns: 'http://www.w3.org/1999/xhtml',
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'author', content: `${meta.author}` },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'keywords', name: 'keywords', content: `${meta.keywords}` },
      { hid: 'description', name: 'description', content: `${meta.description}` },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: `https://hm.baidu.com/hm.js?${baiduKey}` }
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
