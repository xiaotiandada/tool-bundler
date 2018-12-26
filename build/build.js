const merge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.base.config')
const devWebpackConfig = require('./webpack.dev.config')
const prodWebpackConfig = require('./webpack.prod.config')

module.exports = (env, argv) => {
  let config = argv.mode === 'production' ? prodWebpackConfig : devWebpackConfig
  console.log(argv)
  return merge(baseWebpackConfig, config)
}