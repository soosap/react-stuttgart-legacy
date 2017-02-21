/* eslint-disable no-console */
import chalk from 'chalk';
import express from 'express';
import path from 'path';
import axios from 'axios';

const PORT = process.env.PORT || 8080;
const app = express();

app.get('/meetup', (req, res) => {
  axios.get(req.query.uri)
    .then(meetup => res.json(meetup.data))
    .catch(e => res.send(e));
});

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config').default;
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

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
}

app.listen(PORT, (err) => {
  if (err) {
    console.log('err: ', err);
  } else {
    console.log(chalk.yellow(`NODE_ENV: ${process.env.NODE_ENV}`));
    console.log(chalk.green(`===> react-starter-kit <=== | Listening on http://localhost:${PORT}.`));
  }
});
