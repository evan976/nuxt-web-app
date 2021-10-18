const http = require('http')
const express = require('express')
const requireESM = require('esm')(module)
const { Nuxt, Builder } = require('nuxt')

const app = express()

const config = requireESM('../nuxt.config').default
config.dev = app.env !== 'production'

const port = process.env.PORT || 3000
const host = process.env.HOST || '127.0.0.1'

const nuxt = new Nuxt(config)
const server = new http.Server(app)

app.use(nuxt.render)
app.set('port', port)

const bootstrap = () => {
  server.listen(port, host)
  console.log('Server is running...')
}

if (config.dev) {
  new Builder(nuxt)
    .build()
    .then(bootstrap)
    .catch((error) => {
      console.error('开发模式启动失败：', error)
      process.exit(1)
    })
} else {
  bootstrap()
}
