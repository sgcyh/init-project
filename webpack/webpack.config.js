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
      {
        test: /\.css$/, // css 파일을 사용 할 수 있도록 관련 loader 추가
        use: ["style-loader", "css-loader"],
      },
      {
        // https://webpack.kr/guides/asset-modules/
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i, // Asset Modules: 로더를 추가로 구성하지 않아도 에셋파일(폰트, 아이콘)등을 사용할 수 있도록 해주는 모듈
        type: "asset/resource", // webpack 5 이전 버전에서 file-loader를 사용하여 처리하였음
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline", // webpack 5 이전 버전에서 url-loader를 사용하여 처리하였음
      },
    ],
  },
  output: {
    // 빌드된 파일의 경로 및 파일명 설정
    path: path.resolve(__dirname, "..", "./build"),
    filename: "bundle.js",
    assetModuleFilename: "images/[hash][ext][query]", // https://webpack.kr/guides/asset-modules/#custom-output-filename
  },
  mode: "development", // 개발 모드 설정 (차후 development / production  분리 예정)
  plugins: [
    new HtmlWebpackPlugin({
      //템플릿으로 지정한 html 파일에 빌드된 output 번들 파일을 포함시켜줌
      template: path.resolve(__dirname, "..", "./src/index.html"),
    }),
  ],
};
