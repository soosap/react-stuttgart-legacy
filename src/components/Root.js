/* @flow */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import configureStore from '../store/configureStore';

const store = configureStore();

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
