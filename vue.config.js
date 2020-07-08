const path = require('path')
const StylelintPlugin = require('stylelint-webpack-plugin')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/typography.scss'),
        path.resolve(__dirname, './src/assets/scss/variables.scss')
      ]
    })
}

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
  },
  chainWebpack: config => {
    /**
     * Загрузчик глобальных стилей
     */
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))

    /**
     * Добавляем загрузку svg-sprite
     */
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .oneOf('icons')
      .include
      .add(path.resolve(__dirname, './src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .end()
      .end()
      .oneOf('normal')
      .use('file-loader')
      .loader('file-loader')
      .tap(options => {
        options = { // eslint-disable-line no-param-reassign
          name: 'static/img/[name].[hash:8].[ext]'
        }

        return options
      })
  }
}
