import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomeScreen from './components/screens/Home';
import AboutScreen from './components/screens/About';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeScreen} />
    <Route path="about" component={AboutScreen} />
  </Route>
);
