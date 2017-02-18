import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root';

/*
 |--------------------------------------------------------------------------
 | Global CSS imports to be processed by Webpack
 |--------------------------------------------------------------------------
 |
 | We import all top-level css libraries that will be accessible by the
 | entire app. Customization and Corporate Identity are realized by
 | importing index.scss at the very bottom of the list.
 |
 */
if (process.env.NODE_ENV === 'development') {
  require('./../semantic/dist/semantic.css');
} else {
  require('./../semantic/dist/semantic.min.css');
}

import './assets/css/lullabies.css';

/*
 |--------------------------------------------------------------------------
 | Hot Module Replacement with Webpack
 |--------------------------------------------------------------------------
 |
 | http://webpack.github.io/docs/hot-module-replacement-with-webpack.html
 | https://medium.com/@dan_abramov/hot-reloading-in-react-1140438583bf
 | http://andrewhfarmer.com/webpack-hmr-tutorial/
 |
 */
const rootEl = document.getElementById('root');
let render = () => {
  const Root = require('./components/Root.jsx').default;
  ReactDOM.render(
    <Root />,
    rootEl
  );
};

if (module.hot) {
  const renderApp = render;
  const renderErr = (err) => {
    const Redbox = require('redbox-react');
    ReactDOM.render(
      <Redbox error={err} />,
      rootEl
    );
  };

  render = () => {
    try {
      renderApp();
    } catch (err) {
      renderErr(err);
    }
  };

  module.hot.accept('./components/Root.jsx', render);
}

/*
 |--------------------------------------------------------------------------
 | render
 |--------------------------------------------------------------------------
 |
 | Go!
 |
 */
render();
