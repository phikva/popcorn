// project config
const projectName = 'popcorn'; // folder name in htdocs
const timestamp = new Date().getTime();

// dependencies
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');


module.exports = {
    entry: {
        app: './src/index.js',
        admin: './src/admin.js',
    },
    devtool: 'inline-source-map', // for development, fast compile time
    // devtool: 'nosources-source-map', // for production, slow compile time
    optimization: {
        minimizer: [new TerserPlugin()],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['dist']
          }),
        new BrowserSyncPlugin({
            proxy: projectName + '.local',
            files: [
                '**/*.php'
            ],
            reloadDelay: 0,
            notify: false
        }),
        new MiniCssExtractPlugin({
            filename: '[name].bundle.' + timestamp + '.css',
        }),
        new ReplaceInFileWebpackPlugin([{ // add timestamps for cache busting
            files: ['style.css', 'functions.php'],
            rules: [
                {
                    search: /@import 'dist\/app\.bundle.*\.css'/g,
                    replace: '@import \'dist/app.bundle.' + timestamp + '.css\'',
                },
                {
                    search: /'\/dist\/app\.bundle.*\.js'/g,
                    replace: '\'/dist/app.bundle.' + timestamp + '.js\'',
                },
                {
                    search: /'\/dist\/admin\.bundle.*\.js'/g,
                    replace: '\'/dist/admin.bundle.' + timestamp + '.js\'',
                },
            ]
        }]),
    ],
    output: {
        filename: '[name].bundle.' + timestamp + '.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							importLoaders: 2
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									postcssPresetEnv(),
								],
							},
							sourceMap: true
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				],
			},
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'img/'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    }
};
