/* eslint-disable no-console */

import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import webpack from 'webpack';
import webpackConfig from './webpack.config';

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();

if (process.env.NODE_ENV === 'development') {
  const config = webpackConfig({ development: true });
  const compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }));

  app.use(require('webpack-hot-middleware')(compiler));

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'));
  });

} else {
  app.use(require('compression')());
  app.use(express.static('dist'));

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
}

app.listen(PORT, (err) => {
  if (err) {
    console.log('err: ', err);
  } else {
    console.info(`===> Listening on http://localhost:${PORT}.`);
  }
});
