/* @flow */
/* eslint no-console: 0, import/no-extraneous-dependencies: 0 */
import chalk from 'chalk';
import express, { type $Request, type $Response } from 'express';
import path from 'path';
import createMeetupClient from 'meetup-api';
import contentfulService from 'contentful';

const app = express();
const PORT = process.env.PORT || 8080;

const meetup = createMeetupClient({
  key: process.env.MEETUP_API_KEY,
});

const contentful = contentfulService.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_API_KEY,
});

app.get('/meetup/events', (req: $Request, res: $Response) => {
  contentful
    .getEntries({
      content_type: 'event',
      include: 3,
    })
    .then((entries) => {
      console.log('entries', entries);
      res.send(entries);
    })
    .catch((err) => {
      console.log('err', err);
    });
});

app.get('/meetup/events/next', (req: $Request, res: $Response) => {
  contentful
    .getEntries({
      content_type: 'event',
      include: 3,
      'fields.eventDate[gte]': new Date(),
    })
    .then((entries) => {
      console.log('entries', entries);
      res.send(entries);
    })
    .catch((err) => {
      console.log('err', err);
    });
});

app.get('/meetup/events/:id', (req: $Request, res: $Response) => {
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

app.get('/meetup/events/:id/photos', (req: $Request, res: $Response) => {
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
  const webpackConfig = require('../webpack.config').default;
  const config = webpackConfig(process.env.NODE_ENV);
  const compiler = webpack(config);

  app.use(
    require('webpack-dev-middleware')(compiler, {
      // https://webpack.js.org/configuration/dev-server/
      noInfo: true,
      publicPath: config.output.publicPath,
    }),
  );

  app.use(require('webpack-hot-middleware')(compiler));

  app.get('/', (req: $Request, res: $Response) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
} else {
  app.use(require('compression')());
  app.use(express.static('react'));

  app.get('*', (req: $Request, res: $Response) => {
    res.sendFile(path.join(__dirname, 'react', 'index.html'));
  });
}

app.listen(PORT, (err) => {
  if (err) {
    console.log('err: ', err);
  } else {
    console.log('NODE_ENV', chalk.yellow(`${process.env.NODE_ENV || 'development'}`));
    console.log(chalk.green(`===> react-stuttgart <=== | Listening on http://localhost:${PORT}.`));
  }
});
