/* eslint-disable import/no-extraneous-dependencies */

import path from 'path';
import webpack from 'webpack';

import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5HashPlugin from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default function ({ development }) {
  /*
   |--------------------------------------------------------------------------
   | Application-level configuration
   |--------------------------------------------------------------------------
   |
   | All the vars defined prior to the return statement are directly
   | related to the application at hand. It's meant to be the only
   | section that needs to be maintained by the application author.
   |
   */
  const thirdPartyCSSRegex = new RegExp([
    '(',
    'semantic.css', '|', 'semantic.min.css',
    ')',
  ].join(''));

  // Webpack => HTML | Variables needed to render index.html
  // used by HtmlWebpackPlugin
  const buildTimeVarsHtml = development ? {
    NODE_ENV: process.env.NODE_ENV,
  } : {
    NODE_ENV: process.env.NODE_ENV,
    FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
    SEGMENT_WRITE_KEY: process.env.SEGMENT_WRITE_KEY,
  };

  // Webpack => JS | Variables needed to build bundle.js
  // used by EnvironmentPlugin
  const buildTimeVarsJs = development ? [
    'NODE_ENV', 'APP_NAME',
  ] : [
    'NODE_ENV', 'APP_NAME',
  ];

  return {
    resolve: {
      alias: {
        // redux
        actions: path.join(__dirname, 'src', 'actions'),
        components: path.join(__dirname, 'src', 'components'),
        reducers: path.join(__dirname, 'src', 'reducers'),
        store: path.join(__dirname, 'src', 'store'),
        images: path.join(__dirname, 'src', 'images'),
        react$: path.join(__dirname, 'node_modules', 'react', 'dist', development ? 'react.js' : 'react.min.js'),
      },
      extensions: ['.js', '.jsx', '.json'],
    },
    devtool: development ? 'inline-source-map' : 'source-map',
    entry: development ? [
      // ?reload=false parameter tells webpack to avoid page reloads
      'webpack-hot-middleware/client?reload=false',
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
    plugins: development ? [ // ====================================================================
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 9090,
        proxy: 'http://localhost:8080/',
      }, { // plugin options
        // Prevent BrowserSync from reloading the page
        reload: false,
      }),
      // Generate HTML file that contains references to generated bundles
      new HtmlWebpackPlugin({
        template: 'src/index.ejs',
        inject: true,
        ...buildTimeVarsHtml,
      }),
      // Make bundle.js build vars available via "process.env"
      new webpack.EnvironmentPlugin(buildTimeVarsJs),
      // Enable Hot Module Replacement in development
      new webpack.HotModuleReplacementPlugin(),
      // Keep errors from breaking our HMR experience
      new webpack.NoErrorsPlugin(),
      // Print more readable module names in the browser console on HMR updates
      new webpack.NamedModulesPlugin(),
    ] : [ // =======================================================================================
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
        ...buildTimeVarsHtml,
      }),
      // Make bundle.js build vars available via "process.env"
      new webpack.EnvironmentPlugin(buildTimeVarsJs),
    ], // ==========================================================================================
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        development ? {
          test: /\.css$/,
          exclude: thirdPartyCSSRegex,
          use: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'],
        } : {
          test: /\.css$/,
          exclude: thirdPartyCSSRegex,
          loader: ExtractTextPlugin.extract('css-loader?sourceMap?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'),
        },
        { // Don't put third party css dependencies through CSSModules transformer
          test: thirdPartyCSSRegex,
          use: ['style-loader', 'css-loader'],
        },
        development ? {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
            'sass-loader',
          ],
        } : {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('css-loader?sourceMap?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!sass-loader?sourceMap'),
        },
        {
          test: /\.json$/,
          loader: 'json-loader',
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader',
        },
        {
          test: /\.(woff|woff2)$/,
          loader: 'url-loader?prefix=font/&limit=5000',
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
        },
        {
          test: /\.gif/,
          loader: 'url-loader?limit=10000&mimetype=image/gif',
        },
        {
          test: /\.jpg/,
          loader: 'url-loader?limit=10000&mimetype=image/jpg',
        },
        {
          test: /\.png/,
          loader: 'url-loader?limit=10000&mimetype=image/png',
        },
      ],
    },
  };
}
