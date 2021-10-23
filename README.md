# nuxt-web-app

个人博客网站，使用 [Nuxtjs](https://nuxtjs.org/) 构建，基本完成，细节待完善

需要配合服务端才能运行，[在这](https://github.com/wujihua118/express-api-server)

后台管理，[在这](https://github.com/wujihua118/vue-admin-client)

[准备上线地址](https://evanone.site)

## 实现功能

- [x] 首页
- [x] 分类
- [x] 标签页
- [x] 关于
- [x] 时间轴
- [x] 搜索
- [x] 详情
- [x] sitemap
- [x] 百度统计
- [ ] ...

## 技术栈

```html
nuxt + vue + express + axios + swiper + marked + highlight.js
```

## 目录结构

```html
├── .nuxt                  # build
├── assets                 # 静态资源
├── components             # 全局公用组件
├── config                 # 全局配置
├── layouts                # 布局
├── pages                  # 页面组件
├── plugins                # 插件
├── server                 # node 相关
├── service                # api
├── static                 # 静态资源
├── store                  # 静态资源
├── styles                 # 全局样式
├── .editorconfig          # 编辑器配置
├── .eslintrc.js           # eslint 配置项
├── nuxt.config.js         # nuxt 配置文件
└── package.json           # package.json
```

## Screenshot

### 首页

![index](https://raw.githubusercontent.com/wujihua118/nuxt-web-app/master/screenshot/index.png)

### 分类

![category](https://raw.githubusercontent.com/wujihua118/nuxt-web-app/master/screenshot/category.png)

### 文章详情

![detail](https://raw.githubusercontent.com/wujihua118/nuxt-web-app/master/screenshot/detail.png)

## sitemap

`config/sitemap.config.js`

需要单独安装 `axios` ，利用 `axios` 请求后端接口，拼接 URL

```js
const sitemap = {
  path: '/sitemap.xml',
  hostname: 'http://localhost:3000',
  cacheTime: 1000 * 60 * 60 * 6, // 更新频率 1 天
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
      axios.get('http://localhost:8000/api/private/v1/categories', {
        params: {
          offset: 1,
          limit: 200
        }
      }),
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
          lastmod: dateFormat(now)
        }
      ]
      let categoryRoutes = category.data.result.data.map(data => {
        return {
          url: `/category/${data.slug}`,
          changefreq: 'monthly',
          priority: 0.8,
          lastmod: dateFormat(data.updated_at)
        }
      })
      let articleRoutes = article.data.result.data.map(data => {
        return {
          url: `/article/${data.id}`,
          changefreq: 'daily',
          priority: 0.9,
          lastmod: dateFormat(data.updated_at)
        }
      })
      let tagsRoutes = tag.data.result.map(data => {
        return {
          url: `/tag/${data.slug}`,
          changefreq: 'weekly',
          priority: 0.7,
          lastmod: dateFormat(data.updated_at)
        }
      })
      //  用concat进行数据合并
      callback(null, indexRoutes.concat(categoryRoutes, articleRoutes, tagsRoutes))
    }), function (err) {
      throw (err)
    })
  }
}
```

然后在 `nuxt.config.js` 中引入

```js
import sitemap from './config/sitemap.config'

export default {
  // ...
  sitemap,
  // ...
}
```

> ⚠️ 关于时间戳格式化问题，如果使用 `dayjs` 时间格式化不起作用，需要修改源代码
>
> 请将 `sitemap/dist/lib/sitemap.js` 中第 **234** 行代码注释

```js
else if (smiLoose.lastmod) {
  // smi.lastmod = (new Date(smiLoose.lastmod)).toISOString();
}
```

## 百度统计

`plugins/baidu.js`

```js
export default ({ app: { router }, store }) => {
  // 每次路由变更时进行 pv 统计
  router.afterEach((to, from) => {
    // 告诉增加一个 PV
    try {
      window._hmt = window._hmt || []
      window._hmt.push(['_trackPageview', to.fullPath])
    } catch (e) {
    }
  })
}
```

在 `nuxt.config.js` 中引入

请将 `baiduKey` 换成你自己的

```js
export default {
  // ...
  script: [{ src: `https://hm.baidu.com/hm.js?${baiduKey}` }]
  // ...
}
```

## 构建

```bash
# 安装依赖
$ yarn install

# 开发环境运行
$ yarn dev

# 构建打包
$ yarn build
$ yarn start

```

## 后期计划

- [ ] 移动端适配
- [ ] 网站音乐
- [ ] 评论
- [ ] ...

**欢迎 Star，如有问题请 Issues 👏**
