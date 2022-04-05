const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    hot: true,
    open: false, // 기동 후 브라우저 탭 열림 여부
  },
  plugins: [
    new webpack.DefinePlugin({
      // 환경 변수 임시 확인용
      "process.env.name": JSON.stringify("Now Development Mode."),
    }),
  ],
};
