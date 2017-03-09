/* eslint-disable no-console */
import chalk from 'chalk';
import express from 'express';
import path from 'path';
import createMeetupClient from 'meetup-api';

const PORT = process.env.PORT || 8080;
const app = express();

const meetup = createMeetupClient({
  key: process.env.MEETUP_API_KEY,
});

app.get('/meetup/events/:id', (req, res) => {
  console.log('req.params', req.params);
  console.log('req.params.id', req.params.id);
  meetup.getEvent({ urlname: 'ReactStuttgart', id: req.params.id }, (error, event) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log(`Event: ${req.params.id} fetched!`);
      res.json(event);
    }
  });
});

app.get('/meetup/events/:id/photos', (req, res) => {
  meetup.getEventPhotos({ urlname: 'ReactStuttgart', id: req.params.id }, (error, photos) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log(`Photos: ${req.params.id} fetched!`);
      res.json(photos);
    }
  });
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
    console.log(chalk.green(`===> react-stuttgart <=== | Listening on http://localhost:${PORT}.`));
  }
});
