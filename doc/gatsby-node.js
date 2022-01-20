exports.onCreateWebpackConfig = ({
  actions,
  loaders,
  getConfig,
  // stage
}) => {
  const config = getConfig()
  config.module.rules = [
    // Omit the default rule where test === '\.tsx?$'
    ...config.module.rules.filter(
      (rule) => String(rule.test) !== String(/\.jsx?$/)
    ),
    // Recreate it with custom exclude filter
    {
      // Called without any arguments, `loaders.js()` will return an
      // object like:
      // {
      //   options: undefined,
      //   loader: '/path/to/node_modules/gatsby/dist/utils/babel-loader.js',
      // }
      // Unless you're replacing Babel with a different transpiler, you probably
      // want this so that Gatsby will apply its required Babel
      // presets/plugins.  This will also merge in your configuration from
      // `babel.config.js`.
      ...loaders.js(),
      test: /\.jsx?$/,
      // Exclude all node_modules from transpilation, except for 'swiper' and 'dom7'
      exclude: (modulePath) => /node_modules/.test(modulePath)
        // eslint-disable-next-line no-useless-escape
        && !/node_modules[\/\\](@unformagic|react-native-*|jest-*)/.test(
          modulePath
        )
    }
  ]
  actions.setWebpackConfig({
    resolve: {
      alias: {
        'react-native': 'react-native-web',
        // 'react-native-svg': 'react-svg'
      }
    }
  })

  // if (stage === 'build-html') {
  //   actions.setWebpackConfig({
  //     module: {
  //       rules: [
  //         {
  //           test: /react-json-view/,
  //           use: loaders.null()
  //         }
  //       ]
  //     }
  //   })
  // }
}
