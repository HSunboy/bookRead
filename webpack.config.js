    var path = require('path');
    var webpack = require('webpack');
    var HtmlWebpackPlugin = require('html-webpack-plugin');
    var ProgressBarPlugin = require('progress-bar-webpack-plugin');
    var ExtractTextPlugin = require('extract-text-webpack-plugin')
    var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


    module.exports = {
        entry: {
            "main": "./main.js",
            vendor: ['vue', 'vue-router']
        },
        output: {
            filename: '[name].[chunkhash].js',
            path: path.resolve(__dirname, 'dist')
        },
        devServer: {

            port: 9000,
            compress: true
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({ name: ["abc", "manifest"] }),
            new HtmlWebpackPlugin({
                template: "./index.html"
            }),
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true
            }),
            new webpack.DefinePlugin({
                MYTEST: JSON.stringify('test')
            }),
            new ProgressBarPlugin(),
            new ExtractTextPlugin({
                filename: 'style.css',
                allChunks: true
            })
            // new BundleAnalyzerPlugin()
        ],
        devtool: "cheap-eval-source-map",

        module: {
            rules: [{
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        ['es2015', { modules: false }]
                    ],
                    plugins: ['syntax-dynamic-import']
                }

            }, {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: ['css-loader'],
                            fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
                        }),
                        sass: ExtractTextPlugin.extract({
                            use: ['css-loader', 'sass-loader'],
                            fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
                        })
                    }
                }
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000
                }
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: 'css-loader'
                })
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader', 'sass-loader']
                })
            }]
        },
        resolve: {
            extensions: ['.js', '.json', '.css', '.scss', '.vue'],
            alias: {
                'vue$': 'vue/dist/vue.common.js'
            }
        }




    };