import React from 'react';
import { Route, IndexRoute } from 'react-router';

import requireAuth from './components/common/requireAuth';

import App from './components/App';
import HomeScreen from './components/screens/Home';
import AboutScreen from './components/screens/About';
import DashboardScreen from './components/screens/Dashboard';
import AuthScreen from './components/screens/Auth';

import Login from './components/screens/Auth/Login';
import Register from './components/screens/Auth/Register';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeScreen} />
    <Route path="about" component={AboutScreen} />
    <Route path="dashboard" component={requireAuth(DashboardScreen)} />
    <Route path="auth" component={AuthScreen}>
      <Route path="login" component={Login} />
      <Route path="register" component={Register} />
    </Route>
  </Route>
);
