const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);

module.exports = {
  publicPath: IS_PROD ? process.env.VUE_APP_CONTEXT_PATH : '/',
  outputDir: `dist/${process.env.VUE_APP_MODENAME}`,
  assetsDir: 'assets',
  lintOnSave: true,
  runtimeCompiler: true, // 是否使用包含運行時編譯器的Vue構建版本
  productionSourceMap: !IS_PROD, // 生產環境的source map
  chainWebpack: (config) => {
    // 打包分析
    if (process.env.IS_ANALY) {
      config.plugin('webpack-report').use(BundleAnalyzerPlugin, [{
        analyzerMode: 'static',
      }]);
    }
    // 修复HMR
    config.resolve.symlinks(true);
    config.plugin('html').tap((args) => {
      args[0].title = 'Animation';
      return args;
    });
    config.module.rule('eslint').use('eslint-loader');
    // 壓縮圖片
    config.module
    .rule('images')
    .use('image-webpack-loader')
    .loader('image-webpack-loader')
    .options({
      mozjpeg: { progressive: true, quality: 65 },
      optipng: { enabled: false },
      pngquant: { quality: '65-90', speed: 4 },
      gifsicle: { interlaced: false },
      webp: { quality: 75 },
    });
  },
  configureWebpack: (config) => {
    // if (IS_PROD) {
      config.optimization = {
        splitChunks: {
          // 表示選擇哪些 chunks 進行分割，可選值有：async，initial和all
          chunks: 'all',
          // 表示新分離開出的chunk必須大於等於minSize，默認為30000，約30kb。
          minSize: 30000,
          // 表示一個模塊至少應被minChunks個chunk所包含才能分割。默認為1。
          minChunks: 1,
          // 表示按需加載文件時，並行請求的最大數目。默認為5。
          maxAsyncRequests: 5,
          // 表示加載入口文件時，並行請求的最大數目。默認為3。
          maxInitialRequests: 3,
          // 表示拆分出的chunk的名稱連接符，默認為~
          automaticNameDelimiter: '-',
          cacheGroups: {
            jquery: {
              name: 'jquery',
              test: /[\\/]node_modules[\\/]jquery[\\/]/,
              priority: 10,
            },
            bootstrap: {
              name: 'bootstrap',
              test: /[\\/]node_modules[\\/]bootstrap[\\/]/,
              priority: 10,
            },
            vendors: {
              name: 'chunk-vendors',
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
            },
            // common: {
            //   name: 'chunk-common',
            //   minChunks: 2,
            //   priority: -20,
            //   chunks: 'initial',
            //   reuseExistingChunk: true,
            // },
          },
        },
      };
    // }
  },

  css: {
    // 是否使用css分離外掛 ExtractTextPlugin
    extract: true,
    // 開啟 CSS source maps?是否在構建樣式地圖，false將提高構建速度
    sourceMap: false,
    // css預設器配置項
    loaderOptions: {
      scss: {
        prependData: `
        @import "~@/assets/helpers/_var.scss";
        @import "~@/assets/helpers/_mixins.scss";
        `,
      },
    },
  },
};
