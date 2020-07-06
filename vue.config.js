var StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            formatter: require('eslint-friendly-formatter')
          }
        }
      ]
    },
    plugins: [
      new StylelintPlugin({
        files: ['src/**/*.{vue,scss}']
      })
    ]
  }
}
