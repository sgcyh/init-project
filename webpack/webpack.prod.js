const webpack = require("webpack");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new CleanWebpackPlugin(), // 배포 폴더 및 파일 제거
    new webpack.DefinePlugin({
      // 환경 변수 임시 확인용
      "process.env.name": JSON.stringify("(Production)"),
    }),
  ],
};
