import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import { authenticate } from '../actions/users';
import configureStore from '../store/configureStore';
import routes from '../routes';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

// If the token exists, consider the user authenticated
const token = localStorage.getItem('token');
if (token) {
  store.dispatch(authenticate.success());
}

const Root = () =>
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>;

export default Root;
