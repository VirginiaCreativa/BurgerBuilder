const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
	entry: {
		index: './src/index.js',
		app: './src/App.js',
		imports: './src/scripts/imports.js'
	},
	watch: true,
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		overlay: true,
		stats: {
			colors: true
		},
		port: 3000
	},
	resolve: {
		alias: {
      	jquery: path.join(__dirname, 'node_modules', 'jquery')
    	},
		extensions: [
			".scss",
			".css",
			".js",
			".json",
			".jsx"
		]
 	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
			  test: /\.(js|jsx)$/,
			  exclude: /node_modules/,
			  loader: 'eslint-loader',
			  include: path.resolve(process.cwd(), 'src'),
			  enforce: 'pre',
			  options: {
			    fix: true,
			  }
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader'
			},
			{
				test:   /\.css$/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
		        	{
		        		loader: "css-loader",
							options: { 
	        				modules: true,
	        				minimize: true, 
	        				localIdentName: '[name]_[local]_[hash:base64:5]'
		        		}
		        	},
	        	]
			},
			{
				test: /\.scss$/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
		        	{
		        		loader: "css-loader",
		        		options: { 
			        		modules: true, 
	                  sourceMap: true,
	                  importLoaders: 2,
	                  localIdentName: '[name]_[local]_[hash:base64:5]'
		        		}
		        	},
		        	{
						loader: 'postcss-loader',
						options: {
							plugins: (loader) => {
								return [
									require('postcss-import')({
										root: loader.resourcePath
									}),
									require('precss'),
									require('autoprefixer')
								];
							}
						}
					},
        	{
        		loader: 'resolve-url-loader'
        	},
        	{
        		loader: "sass-loader?sourceMap"
        	},
					{
					loader: 'sass-resources-loader',
					options: {
						resources: [
							'./src/style/_variables.scss',
							'./src/style/_global.scss'
							]
						}
					}
	      ]
			},
			{
				test: /\.(png|jpe?g|gif|ico)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'assets/images',
							name: '[sha512:hash:base64:10].[ext]',
							context: './assets/images'
						}
					}
				]
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'assets/images',
							context: './assets/images'
						}
					}
				]
			},
			{
				test: /\.(woff|woff2|png|jpe?g|gif|ico|eot|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
				loader: "url-loader?limit=80000"
			},
      	{
      		test: /\.(woff|woff2|eot|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
      		loader: 'file-loader',
      		options: {
					outputPath: 'assets/fonts/',
					name: '[sha512:hash:base64:10].[ext]'
				}
      	}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: __dirname + '/src/index.html',
			filename: 'index.html',
			inject: 'body',
			title: 'Burger Builder',
			minify: {
				collapseWhitespace: true
			}
		}),
		new MiniCssExtractPlugin({
			filename: devMode ? '[name].css' : '[name].[hash].css',
      	chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
		}),
		new StyleLintPlugin({
			configFile: '.stylelintrc',
			syntax: "scss",
			fix: false,
			context: 'src',
			files: [
				'**/*.s?(a|c)ss',
				'**/**/*.s?(a|c)ss',
				'**/**/**/*.s?(a|c)ss',
			],
			failOnError: false,
			quiet: false
	    }),
		new webpack.ProvidePlugin({
			'window.jQuery': 'jquery',
			'window.$': 'jquery',
			'jQuery': 'jquery',
			'$': 'jquery'
    	}),
		new BrowserSyncPlugin({
	      host: 'localhost',
	      files: [
	        './**/*.html',
	        './*.html',
	        './**/*.js',
	        './**/**/*.js',
	        './**/**/**/*.js',
	        './**/**/**/**/*.js',
	        './*.js',
	        './**/*.scss',
	        './**/**/*.scss',
	        './**/**/**/*.scss',
	        './**/**/**/**/*.scss',
	        './*.scss',
	        './**/*.css',
	        './*.css'
	      ],
	      port: 3000,
	      open: false,
	      server: { baseDir: ['dist'] }
    	}),
   ]
};