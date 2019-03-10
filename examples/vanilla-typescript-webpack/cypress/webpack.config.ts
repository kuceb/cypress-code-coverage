import * as webpack from 'webpack'


const config:webpack.Configuration =  {
  resolve: {
    extensions: ['.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            plugins: [
              "istanbul"
            ],
            presets: ['@babel/preset-typescript'],
            babelrc: false,
          }
        },
      },
    ],
  },
}

module.exports = config