const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: "./",
  //修改页面title
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "nayutabit";
      return args;
    });
  },
  // 开启这个后connect-history-api-fallback才会生效
  configureWebpack: {
    devServer: {
      historyApiFallback: true
    }
  }
  // devServer: {
  //   proxy: "http://101.34.174.98:3007"
  // }
});
