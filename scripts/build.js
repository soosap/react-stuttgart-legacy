/* @flow */
/* eslint no-console: 0, import/no-extraneous-dependencies: 0 */
import chalk from 'chalk';
import webpack from 'webpack';
import config from '../webpack.config';

console.log(
  chalk.magenta('Generating bundle for production. This will take a moment...'),
);

webpack(config('production')).run((err, stats) => {
  if (err) {
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();
  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error =>
      console.log(chalk.red(`error: ${error}`)),
    );
  }

  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack generated the following warnings: '));
    jsonStats.warnings.map(warning =>
      console.log(chalk.yellow(`warning: ${warning}`)),
    );
  }

  console.log(`Webpack stats: ${stats}`);
  console.log(`${chalk.green('Successfully compiled!')}`);

  console.log();
  console.log(`The ${chalk.cyan('build')} folder is ready to be deployed.`);
  console.log();

  return 0;
});
