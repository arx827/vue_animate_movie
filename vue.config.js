module.exports={
    // publicPath: '/',
    outputDir:'dist/' + process.env.NODE_ENV,
    lintOnSave: true,
    // eslint-loader 是否在儲存的時候檢查
    lintOnSave: true,
    css: {
        // 是否使用css分離外掛 ExtractTextPlugin
        extract: true,
        // 開啟 CSS source maps?是否在構建樣式地圖，false將提高構建速度
        sourceMap: false,
        // css預設器配置項
        loaderOptions: {},
      },
}