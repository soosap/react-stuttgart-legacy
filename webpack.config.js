/* @flow */
import { resolve } from 'path';
import webpack from 'webpack';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5HashPlugin from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default function (NODE_ENV: 'development' | 'production') {
  return {
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
    },
    devtool: NODE_ENV === 'development' ? 'inline-source-map' : 'source-map',
    context: resolve(__dirname, 'src'),
    entry: NODE_ENV === 'development'
      ? [
        'regenerator-runtime/runtime',
        // enables use of modern ESNext features like async/await and generator functions
        'webpack-hot-middleware/client?reload=false',
        // ?reload=false parameter tells webpack to avoid page reloads
        './index.js',
      ]
      : {
        vendor: './vendor.js',
        main: './index.js',
      },
    target: 'web',
    output: NODE_ENV === 'development'
      ? {
        path: resolve(__dirname),
        publicPath: '/',
        filename: 'bundle.js',
      }
      : {
        path: resolve(__dirname, 'build', 'react'),
        publicPath: '/',
        filename: '[name].[chunkhash].js',
      },
    plugins: NODE_ENV === 'development'
      ? [
        new HtmlWebpackPlugin({
          template: 'index.ejs',
          favicon: resolve(__dirname, 'public', 'favicon.ico'),
          inject: true,
          NODE_ENV: process.env.NODE_ENV,
        }),
        new webpack.EnvironmentPlugin(['NODE_ENV']),
          // Make bundle.js build vars available via "process.env"
        new CopyWebpackPlugin([{ from: resolve(__dirname, 'public') }]),
          // provide access to static /public folder
        new webpack.HotModuleReplacementPlugin(),
          // Enable Hot Module Replacement in development
        new webpack.NoEmitOnErrorsPlugin(),
          // Keep errors from breaking our HMR experience
        new webpack.NamedModulesPlugin(),
          // Print more readable module names in the browser console on HMR updates
      ]
      : [
          // =======================================================================================
          // Hash bundle-files using MD5 so that their names change when the content changes
        new WebpackMd5HashPlugin(),
          // Generate an external css file with a hash in the filename
        new ExtractTextPlugin('[name].[contenthash].css'),
          // Use CommonChunkPlugin to create a separate bundle of vendor libraries
          // so that they are cached separately improving performance
        new webpack.optimize.CommonsChunkPlugin({
          names: ['vendor', 'manifest'],
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
          template: 'index.ejs',
          favicon: resolve(__dirname, 'public', 'favicon.ico'),
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          },
          inject: true,
          NODE_ENV: process.env.NODE_ENV,
          FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
          SEGMENT_WRITE_KEY: process.env.SEGMENT_WRITE_KEY,
        }),
        new CopyWebpackPlugin([{ from: resolve(__dirname, 'public') }]),
          // provide access to static /public folder
        new webpack.EnvironmentPlugin(['NODE_ENV']),
      ], // ====================================================================
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [{ loader: 'babel-loader' }],
        },
        NODE_ENV === 'development'
          ? {
            test: /\.css$/,
            use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
          }
          : {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              use: [{ loader: 'css-loader' }],
            }),
          },
        {
          test: /\.json$/,
          use: [{ loader: 'json-loader' }],
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          use: [{ loader: 'file-loader' }],
        },
        {
          test: /\.(woff|woff2)$/,
          use: [{ loader: 'url-loader', options: { prefix: 'font/', limit: 5000 } }],
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'url-loader',
              options: { limit: 10000, mimetype: 'application/octet-stream' },
            },
          ],
        },
        NODE_ENV === 'development'
          ? {
            test: /\.(jpe?g|png|gif|svg)$/,
            use: [{ loader: 'url-loader', options: { limit: 40000 } }],
          }
          : {
            test: /\.(jpe?g|png|gif|svg)$/,
            use: [
                { loader: 'url-loader', options: { limit: 40000 } },
              {
                loader: 'image-webpack-loader',
                options: { bypassOnDebug: true },
              },
            ],
          },
      ],
    },
  };
}
