const express = require('express')
const webpack = require('webpack') // aliased to webpack-universal
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotServerMiddleware = require('webpack-hot-server-middleware')
const clientConfig = require('../webpack/client.dev')
const serverConfig = require('../webpack/server.dev')

const app = express()

const compiler = webpack([clientConfig, serverConfig])
const clientCompiler = compiler.compilers[0]
const publicPath = clientConfig.output.publicPath
const options = { publicPath, stats: { colors: true } }

app.use(webpackDevMiddleware(compiler, options))
// REQUIRED: For development only. Passes clientStats to render.js.
app.use(webpackHotServerMiddleware(compiler))

app.listen(process.env.PORT, () => {
  console.log(`Listening @ http://${process.env.IP}:${process.env.PORT}`)
})

// Note for .babelrc
// - stage-2 preset is required to use `import`
// - universal-import plugin is required to convert
//   use of `universal(import('./Foo'))` into full
//   boilerplate syntax.