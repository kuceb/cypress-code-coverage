
const wp = require('@cypress/webpack-preprocessor')
require("ts-node/register")
module.exports = (on) => {
  const options = {
    webpackOptions: require('../webpack.config'),
  }
  on('file:preprocessor', wp(options))
}