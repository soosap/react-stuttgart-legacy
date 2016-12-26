/* eslint-disable no-console, import/no-extraneous-dependencies */

import chalk from 'chalk';
import webpack from 'webpack';
import config from '../webpack.config';

console.log(
  chalk.blue('Generating bundle for production. This will take a moment...'),
);

webpack(config({ development: false })).run((err, stats) => {
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
  console.log(`${chalk.green('Successfully compiled!')}`);

  console.log();
  console.log(`The ${chalk.cyan('dist')} folder is ready to be deployed.`);
  console.log('You may also serve it locally with a static server:');

  console.log();
  console.log(`    ${chalk.cyan('yarn')} global add pushstate-server`);
  console.log(`    ${chalk.cyan('pushstate-server')} dist/`);
  console.log(`    ${chalk.cyan('open')} http://localhost:9000`);
  console.log();

  return 0;
});
