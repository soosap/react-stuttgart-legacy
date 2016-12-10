/* eslint-disable no-console */

import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from './webpack.config.dev';

const PORT = process.env.PORT || 8080;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.listen(PORT, (err) => {
  if (err) {
    console.log('err: ', err);
  } else {
    console.info('===> Listening on port %s.', PORT);
    open(`http://localhost:${PORT}`)
  }
});
