/* eslint-disable no-unused-vars */

/*
 |--------------------------------------------------------------------------
 | vendor.js | CommonsChunkPlugin
 |--------------------------------------------------------------------------
 |
 | This file contains references to the vendor libraries we're using in
 | this project. This is used by webpack in the production build only.
 | A separate bundle for vendor-specific code is useful since it's
 | unlikely to change as often as the application's code.
 |
 | So all the libraries we reference here will be written to vendor.js so
 | they can be cached until one of them change. Basically, this avoids
 | customers having to download a huge JS file anytime a line of code
 | changes. They only have to download vendor.js when a vendor library
 | changes which should be less frequent. Any files that aren't referenced
 | here will be bundled into main.js for the production build.
 |
 */
import 'classnames';
import 'react';
import 'react-css-modules';
import 'react-dom';
import 'react-redux';
import 'react-router';
import 'react-router-redux';
import 'recompose';
import 'redux';
import 'redux-form';
import 'redux-saga';
