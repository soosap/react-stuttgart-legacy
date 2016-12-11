/* eslint-disable import/no-extraneous-dependencies */

import path from 'path';
import webpack from 'webpack';

import BrowsersyncPlugin from 'browser-sync-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5HashPlugin from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default function ({ development }) {
  return {
    devtool: development ? 'inline-source-map' : 'source-map',
    entry: development ? [
      path.resolve(__dirname, 'src/index'),
    ] : {
      vendor: path.resolve(__dirname, 'src/vendor'),
      main: path.resolve(__dirname, 'src/index'),
    },
    target: 'web',
    output: development ? {
      path: path.resolve(__dirname, 'src'),
      publicPath: '/',
      filename: 'bundle.js',
    } : {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: '[name].[chunkhash].js',
    },
    plugins: development ? [
      new BrowsersyncPlugin({
        host: 'localhost',
        port: 9090,
        proxy: 'http://localhost:8080/',
      }),
      // Generate HTML file that contains references to generated bundles
      new HtmlWebpackPlugin({
        template: 'src/index.ejs',
        inject: true,
        NODE_ENV: process.env.NODE_ENV,
      }),
    ] : [
      // Hash bundle-files using MD5 so that their names change when the content changes
      new WebpackMd5HashPlugin(),
      // Generate an external css file with a hash in the filename
      new ExtractTextPlugin('[name].[contenthash].css'),
      // Use CommonChunkPlugin to create a separate bundle of vendor libraries
      // so that they are cached separately improving performance
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
      }),
      // Minify JS
      new webpack.optimize.UglifyJsPlugin(),
      // Generate HTML file that contains references to generated bundles
      new HtmlWebpackPlugin({
        template: 'src/index.ejs',
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
    ],
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        development ? {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        } : {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('css?sourceMap'),
        },
      ],
    },
  };
}
