/* eslint-disable no-undef */
const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					{
						loader:"sass-loader",
						options:{	
							implementation:require('sass'),
							sassOptions:{
								file:'src/style.scss'
							}
						}
					}
				],
			}
		]
	},
	resolve: {
		extensions: [
			'*',
			'.js',
			'.jsx',
			'.scss'
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		port: 3000,
		publicPath: 'http://localhost:3000/dist/',
		hotOnly: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new Dotenv()
	]
};
