const chalk = require('chalk');
const _ = require('lodash');
const env = require('dotenv').config({ silent: true });

const package = require('../../package.json');
const colorMap = {
    development: 'bgGreen',
    production: 'bgBlue'
};
const mainColor = 'white';
const defaultColor = 'bgMagenta';
const nodeEnvColor = colorMap[process.env.NODE_ENV] || defaultColor;
const appEnvColor = colorMap[process.env.APP_ENV] || defaultColor;

console.log(chalk[mainColor].bold('Angular Webpack Starter ') + chalk[defaultColor].bold('%s'), package.version);
console.log(chalk.underline.bold('Environments:'));
console.log(chalk[mainColor]('- NODE_ENV: ') + chalk[nodeEnvColor]('%s'), process.env.NODE_ENV);
console.log(chalk[mainColor]('- APP_ENV: ') + chalk[appEnvColor]('%s'), process.env.APP_ENV);
console.log('- Update via ' + chalk.inverse('.env') + ' file');

console.log(chalk.underline.bold('\nDependencies:'));
console.log(chalk[mainColor]('- Main Dependencies: ') + chalk.bgGreen('%s'), _.toArray(package.dependencies).length);
console.log(chalk[mainColor]('- Dev Dependencies: ') + chalk.bgGreen('%s'), _.toArray(package.devDependencies).length);