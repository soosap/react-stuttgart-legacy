import React from 'react';

import requireAuth from './components/common/requireAuth';

import App from './components/App';
import HomeScreen from './components/screens/Home';

const routes = {
  component: App,
  path: '/',
  indexRoute: { component: HomeScreen },
  childRoutes: [
    {
      path: '/about',
      getComponent(location, cb) {
        System.import('./components/screens/About').then(module => cb(null, module.default));
      },
    },
    {
      path: '/dashboard',
      getComponent(location, cb) {
        System.import('./components/screens/Dashboard').then(module => cb(null, module.default));
      },
    },
    {
      path: '/auth',
      getComponent(location, cb) {
        System.import('./components/screens/Auth').then(module => cb(null, module.default));
      },
      childRoutes: [
        {
          path: 'login',
          getComponent(location, cb) {
            System.import('./components/screens/Auth/Login').then(module => cb(null, module.default));
          },
        },
        {
          path: 'register',
          getComponent(location, cb) {
            System.import('./components/screens/Auth/Register').then(module => cb(null, module.default));
          },
        },
      ],
    },
  ],
};

export default routes;
