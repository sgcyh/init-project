const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.tsx"), // 소스 진입점.
  resolve: {
    // 파일 import할때 확장자 생략 가능함. (tsx 검색하고 없으면 ts 검색 그 뒤에 js검색해서 가져옴.)
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/, //ts, js 모든 파일에 대해서 babel loader를 사용하여 변환 하겠다고 선언
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
  output: {
    // 빌드된 파일의 경로 및 파일명 설정
    path: path.resolve(__dirname, "..", "./build"),
    filename: "bundle.js",
  },
  mode: "development", // 개발 모드 설정 (차후 development / production  분리 예정)
  plugins: [
    new HtmlWebpackPlugin({
      //템플릿으로 지정한 html 파일에 빌드된 output 번들 파일을 포함시켜줌
      template: path.resolve(__dirname, "..", "./src/index.html"),
    }),
  ],
};
