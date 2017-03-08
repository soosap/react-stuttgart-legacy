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
        actions: path.join(__dirname, 'src', 'actions'),
        components: path.join(__dirname, 'src', 'components'),
        reducers: path.join(__dirname, 'src', 'reducers'),
        sagas: path.join(__dirname, 'src', 'sagas'),
        store: path.join(__dirname, 'src', 'store'),
        images: path.join(__dirname, 'src', 'assets', 'images'),
        // vendor libs
        react: path.join(__dirname, 'node_modules', 'react', 'dist', development ? 'react.js' : 'react.min.js'),
        'react-dom': path.join(__dirname, 'node_modules', 'react-dom', 'dist', development ? 'react-dom.js' : 'react-dom.min.js'),
        'react-redux': path.join(__dirname, 'node_modules', 'react-redux', 'dist', development ? 'react-redux.js' : 'react-redux.min.js'),
        'react-router-redux': path.join(__dirname, 'node_modules', 'react-router-redux', 'dist', development ? 'ReactRouterRedux.js' : 'ReactRouterRedux.min.js'),
        redux: path.join(__dirname, 'node_modules', 'redux', 'dist', development ? 'redux.js' : 'redux.min.js'),
        'redux-form': path.join(__dirname, 'node_modules', 'redux-form', 'dist', development ? 'redux-form.js' : 'redux-form.min.js'),
        'styled-components': path.join(__dirname, 'node_modules', 'styled-components', 'lib', 'index.js'),
      },
      extensions: ['.js', '.jsx', '.json'],
    },
    devtool: development ? 'inline-source-map' : 'source-map',
    entry: development ? [
      'regenerator-runtime/runtime',
      // enables use of modern ESNext features like async/await and generator functions
      'webpack-hot-middleware/client?reload=false',
      // ?reload=false parameter tells webpack to avoid page reloads
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
        open: false,
      }, { // plugin options
        // Prevent BrowserSync from reloading the page
        reload: false,
      }),
      // Generate HTML file that contains references to generated bundles
      new HtmlWebpackPlugin({
        template: 'src/index.ejs',
        favicon: 'src/assets/images/favicon.ico',
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
        names: ['vendor', 'manifest'],
      }),
      // Minify JS
      new webpack.optimize.UglifyJsPlugin(),
      // Generate HTML file that contains references to generated bundles
      new HtmlWebpackPlugin({
        template: 'src/index.ejs',
        favicon: 'src/assets/images/favicon.ico',
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
          use: ['babel-loader'],
        },
        development ? {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        } : {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            loader: 'css-loader',
          }),
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
        development ? {
          test: /\.(jpe?g|png|gif|svg)$/,
          use: [{ loader: 'url-loader', options: { limit: 40000 } }],
        } : {
          test: /\.(jpe?g|png|gif|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: { limit: 40000 },
            },
            'image-webpack-loader',
          ],
        },
      ],
    },
  };
}
