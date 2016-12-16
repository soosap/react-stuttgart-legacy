import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomeScreen from './components/screens/Home';
import AboutScreen from './components/screens/About';
import AuthScreen from './components/screens/Auth';

import Login from './components/screens/Auth/Login';
import Register from './components/screens/Auth/Register';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeScreen} />
    <Route path="about" component={AboutScreen} />
    <Route path="auth" component={AuthScreen}>
      <Route path="login" component={Login} />
      <Route path="register" component={Register} />
    </Route>
  </Route>
);
