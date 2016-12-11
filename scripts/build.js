/* eslint-disable no-console, import/no-extraneous-dependencies */

import chalk from 'chalk';
import dotenv from 'dotenv';
import webpack from 'webpack';
import config from '../webpack.config';

// Load environment variables from .env file
dotenv.config();

console.log(chalk.blue('Generating minified bundle for production. This will take a moment...'));

webpack(config({ production: true })).run((err, stats) => {
  if (err) { // in this case a fatal error occurred - stop here!
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();
  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalk.red(`error: ${error}`)));
  }

  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack generated the following warnings: '));
    jsonStats.warnings.map(warning => console.log(chalk.yellow(`warning: ${warning}`)));
  }

  console.log(`Webpack stats: ${stats}`);
  // If we got this far the build succeeded!
  console.log(chalk.green('The app has been built for production and written to /dist!'));

  return 0;
});
