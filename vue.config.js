module.exports = {
  devServer: {
    host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
  },
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: "/"
    ? 'dev/'
    : '/',
  outputDir: process.env.VUE_BUILD_FOLDER,
  // assetsDir: 'assets/',
  indexPath: 'index.html',
  // crossorigin: 'url-de-origen/',

}
