import webpack from 'webpack'
import HtmlWebpackPlugin = require('html-webpack-plugin')

const config:webpack.Configuration = {
	entry: './src/index.ts',
	module: {
		rules: [
			{
				test: /\.(ts|js)/,
				exclude: /node_modules/,
				use: {
					loader: require.resolve('babel-loader'),
					options: {
						presets: ["@babel/preset-typescript"],
						plugins: ["istanbul"]
					}
				}
			}
		]
	},
	devtool: 'cheap-module-source-map',
	mode: process.env.NODE_ENV === 'production' ? 'production': 'development',
  plugins: [
		new HtmlWebpackPlugin()
	],
	devServer: {
		port: 3000
	}
}

export default config