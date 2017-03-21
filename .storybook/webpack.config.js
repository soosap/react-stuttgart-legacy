// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://getstorybook.io/docs/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    loaders: [
      {
        loader: 'style-loader!css-loader',
        test: /\.css$/
      },
      {
        loader: 'url-loader?limit=10000',
        test: /\.(gif|jpg|png|svg)$/,
      }, {
        loader: 'url-loader?limit=1',
        test: /favicon\.ico$/,
      }, {
        loader: 'url-loader?limit=100000',
        test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
      },
    ],
  },
};
