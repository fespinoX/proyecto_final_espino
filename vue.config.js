module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? 'dev/'
    : '/',
  outputDir: process.env.VUE_BUILD_FOLDER,
  // assetsDir: 'assets/',
  indexPath: 'index.html',
  // crossorigin: 'url-de-origen/',

}
