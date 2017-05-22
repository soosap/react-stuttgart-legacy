/* @flow */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { injectGlobal } from 'styled-components';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import configureStore from '../store/configureStore';
import { Color, Font, FONT_URL } from '../lib/constants';

const store = configureStore({});

injectGlobal([`
  @font-face {
    font-family: ${Font.PRIMARY};
    font-family: ${Font.SECONDARY};
    src: url(${FONT_URL});
  }

  body {
    font-family: ${Font.PRIMARY};
    margin: 0;
    background-color: ${Color.SECONDARY};
  }
`]);

const Root = () =>
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </div>
    </Router>
  </Provider>;

export default Root;
