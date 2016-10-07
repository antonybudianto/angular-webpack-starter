const chalk = require('chalk');
const _ = require('lodash');
const glob = require('glob');
const env = require('dotenv').config({ silent: true });

const package = require('../../package.json');
const colorMap = {
    development: 'bgGreen',
    production: 'bgBlue'
};
const appList = [
    'module',
    'component',
    'pipe',
    'directive',
    'routes',
    'spec'
];
const mainColor = 'white';
const defaultColor = 'bgMagenta';
const defaultValueColor = 'bgGreen';
const appEnv = process.env.APP_ENV || 'development';
const nodeEnvColor = colorMap[process.env.NODE_ENV] || defaultColor;
const appEnvColor = colorMap[appEnv] || defaultColor;

console.log(chalk[mainColor].bold('Angular Webpack Starter ') + chalk[defaultColor].bold(' %s '), package.version);
console.log(chalk.underline.bold('Environments:'));

if (!env) {
    console.log('- No ' + chalk.inverse(' .env ') + ' file is detected. You can create one from ' + chalk.inverse('.env.example'));
} else {
    console.log('- Loaded ' + chalk[defaultValueColor](' %s ') + ' values from ' + chalk.inverse(' .env ') + ' file', _.toArray(env).length);
}

console.log(chalk[mainColor]('- NODE_ENV: ') + chalk[nodeEnvColor](' %s '), process.env.NODE_ENV);
console.log(chalk[mainColor]('- APP_ENV: ') + chalk[appEnvColor](' %s '), appEnv);

console.log(chalk.underline.bold('\nDependencies:'));
console.log(chalk[mainColor]('- Main Dependencies: ') + chalk[defaultValueColor](' %s '), _.toArray(package.dependencies).length);
console.log(chalk[mainColor]('- Dev Dependencies: ') + chalk[defaultValueColor](' %s '), _.toArray(package.devDependencies).length);

console.log(chalk.underline.bold('\nApplication:'));
appList.forEach(function(type) {
    const files = glob.sync('src/app/**/*.' + type +'.ts');
    console.log(chalk[mainColor]('- %s: ') + chalk[defaultValueColor](' %s '), type, files.length);
});
const files = glob.sync('e2e/**/*.spec.ts');
console.log(chalk[mainColor]('- %s: ') + chalk[defaultValueColor](' %s '), 'e2e spec', files.length);