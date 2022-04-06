const {merge} = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = (envVars) => {
  const {env} = envVars;
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, envConfig);

  // console.log(`${env} webpack config:`, JSON.stringify(config, null, 2));
  return config;
};
