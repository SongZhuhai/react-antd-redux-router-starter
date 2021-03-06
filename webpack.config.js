require('es6-promise').polyfill()
module.exports = function(webpackConfig) {
  webpackConfig.module.loaders.forEach(function(loader) {
    if (loader.loader === 'babel') {
      // https://github.com/ant-design/babel-plugin-antd
      loader.query.plugins.push('antd');
    }
    return loader;
  });

  // Fix ie8 compatibility
  webpackConfig.module.loaders.unshift({
    test: /\.jsx?$/,
    loader: 'es3ify',
  });
  webpackConfig.module.loaders.unshift({
    test: /\.js$/,
    include: /linebreak/,
    loader: "transform?brfs"
  });
  return webpackConfig;
};
