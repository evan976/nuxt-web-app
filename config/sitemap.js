import axios from 'axios'
import dayjs from 'dayjs'

const dateFormat = date => {
  return dayjs(date).format('YYYY/MM/DD')
}

const sitemap = {
  path: '/sitemap.xml',
  hostname: 'http://localhost:3000',
  cacheTime: 1000 * 60 * 60 * 6,
  gzip: true, // 生成 .xml.gz 压缩的 sitemap
  generate: false, // 允许使用 nuxt generate 生成
  // 排除不要页面
  exclude: [
    '/404',
    '/timeline',
    '/about'
  ],
  defaults: {
    changefreq: 'always',
    lastmod: new Date()
  },

  routes (callback) {
    axios.all([
      // 文章分类
      axios.get('http://localhost:8000/api/private/v1/categories'),
      // 所有文章
      axios.get('http://localhost:8000/api/private/v1/articles', {
        params: {
          offset: 1,
          limit: 200
        }
      }),
      // 文章标签
      axios.get('http://localhost:8000/api/private/v1/tags')

    ]).then(axios.spread(function (category, article, tag) {
      let now = new Date()
      let indexRoutes = [
        {
          url: '/',
          changefreq: 'daily',
          priority: 1,
          lastmodISO: dateFormat(now)
        }
      ]
      let categoryRoutes = category.data.result.data.map(data => {
        return {
          url: `/category/${data.slug}`,
          changefreq: 'monthly',
          priority: 0.8,
          lastmodISO: dateFormat(data.updated_at)
        }
      })
      let articleRoutes = article.data.result.data.map(data => {
        return {
          url: `/article/${data.id}`,
          changefreq: 'daily',
          priority: 0.9,
          lastmodISO: dateFormat(data.updated_at)
        }
      })
      let tagsRoutes = tag.data.result.map(data => {
        return {
          url: `/tag/${data.slug}`,
          changefreq: 'weekly',
          priority: 0.7,
          lastmodISO: dateFormat(data.updated_at)
        }
      })
      //  用concat进行数据合并
      callback(null, indexRoutes.concat(categoryRoutes, articleRoutes, tagsRoutes))
    }), function (err) {
      throw (err)
    })
  }
}

export default sitemap
