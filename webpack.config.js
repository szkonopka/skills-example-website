const path = require('path');

module.exports = {
	entry: {
		index: './src/index.js',
	},
	mode: 'development',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].bundle.js'
	},
	// babel configuration for ES5 compability
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.sass|scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	}
}
