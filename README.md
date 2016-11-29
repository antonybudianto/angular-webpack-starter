# Angular Webpack Starter

[![Build Status](https://travis-ci.org/antonybudianto/angular-webpack-starter.svg?branch=master)](https://travis-ci.org/antonybudianto/angular-webpack-starter)
[![Build status](https://ci.appveyor.com/api/projects/status/d5b3a9nnxnv5bxa5/branch/master?svg=true)](https://ci.appveyor.com/project/antonybudianto/angular-webpack-starter/branch/master)
[![Coverage Status](https://coveralls.io/repos/github/antonybudianto/angular-webpack-starter/badge.svg?branch=master)](https://coveralls.io/github/antonybudianto/angular-webpack-starter?branch=master)
[![Dependency Status](https://david-dm.org/antonybudianto/angular-webpack-starter.svg)](https://david-dm.org/antonybudianto/angular-webpack-starter)
[![devDependency Status](https://david-dm.org/antonybudianto/angular-webpack-starter/dev-status.svg)](https://david-dm.org/antonybudianto/angular-webpack-starter#info=devDependencies)
[![Dependency Status](https://dependencyci.com/github/antonybudianto/angular-webpack-starter/badge)](https://dependencyci.com/github/antonybudianto/angular-webpack-starter)

> Live Production Build [Demo](http://angular-webpack-starter.surge.sh/)

## Introduction
Welcome to Angular Webpack Starter!
This starter contains almost everything you need to start developing [Angular](https://angular.io/).

> This repo is evolved from [Angular 2 Starter](https://github.com/antonybudianto/angular2-starter)

### Why choose this starter?
- Extensible via [ngstarter extensions](https://github.com/ngstarter)
- Complete workflow from serve, lint, unit test, e2e test, to bundling
- Support [dotenv](https://www.npmjs.com/package/dotenv) [Environment Variables](https://github.com/antonybudianto/angular-webpack-starter/wiki/Environment-Variables)
- 100% code coverage
- 100% [CI/CD](https://github.com/antonybudianto/angular-webpack-starter/wiki/Continuous-Integration) pipeline ready
- No global package installation
- You can tune it as you wish, no blackbox

### What's included?
* [TypeScript](http://www.typescriptlang.org/) for the base language
  * with [Typings](https://github.com/typings/typings) for TypeScript definition manager
* [Webpack Dev Server](https://webpack.github.io/docs/webpack-dev-server.html) for development server & reload capability
* [Lite Server](https://github.com/johnpapa/lite-server) for production build server
* [Codelyzer](https://github.com/mgechev/codelyzer) for static code analyzer
* [Karma](http://karma-runner.github.io/) for test-runner
* [Jasmine](http://jasmine.github.io/) for test framework
* [Istanbul](https://github.com/gotwarlost/istanbul) for test coverage
  * with [Remap Istanbul](https://github.com/SitePen/remap-istanbul) for remapping Javascript to TypeScript coverage

Please visit the [wiki](https://github.com/antonybudianto/angular-webpack-starter/wiki) for more details.

## Prerequisites
You need to have [Node.js and npm](https://nodejs.org/en/)
- Support Node v4 - latest
- Support npm v3 - latest
- Support [Yarn](https://yarnpkg.com/)

## Installation
Download the starter from [releases page](https://github.com/antonybudianto/angular-webpack-starter/releases)

Go to the starter directory and install the packages ([Yarn](https://github.com/yarnpkg/yarn) is recommended):
```bash
npm install
```

Then copy `.env.example` and rename it as `.env`. For more [details](https://github.com/antonybudianto/angular-webpack-starter/wiki/Environment-Variables)

## Start
Let's start up, run following:
```bash
// Build DLL first, run this once after adding new package
npm run build:dll

// Start the app
npm start
```

and done! Open a browser and go to http://localhost:8080 and you can start developing Angular!
Every changes to the file will refresh the browser automatically
and it'll also compile your changed TypeScripts files to Javascript files.

> If any error occured when starting, please retry `npm run build:dll`.
That means DLL build is too old and need to be refreshed.

## Testing
This starter comes with testing workflow

### Unit testing
Just run
```bash
npm test
```
and it'll compile all TypeScript files, start Karma, then remap Istanbul coverage so that it shows TypeScript coverage, not the transpiled JavaScript coverage.

![Coverage result](http://s33.postimg.org/w7m9ckdkf/Screen_Shot_2016_06_04_at_8_15_53_AM.png)

### E2E testing
Firstly start the server:
```bash
npm start
```
To begin testing, run:
```bash
npm run e2e
```

## Production
> For more details, visit [Continuous Integration  wiki](https://github.com/antonybudianto/angular-webpack-starter/wiki/Continuous-Integration)

You can create production build by running:
```bash
npm run build
```
or you can create production build and then serve it using Lite Server by running:
```bash
npm run serve:build
```

## Extension
You can extend this starter with many extensions built by the community. Browse the extensions [here](https://github.com/ngstarter)

## Contributing
Feel free to submit a PR if there are any issues or new features, please read [this](https://github.com/antonybudianto/angular-webpack-starter/wiki/Contributing) before

## Special thanks
* For all contributors who have helped this starter improvement
* John Papa for his awesome [angular-styleguide](https://github.com/johnpapa/angular-styleguide) and [Tour of Heroes](https://github.com/johnpapa/angular2-tour-of-heroes)
* Julie Ralph for her [ng2-test-seed](https://github.com/juliemr/ng2-test-seed) which helped me a lot to get started with testing feature
* Patrick JS for his [angular2-webpack-starter]
(https://github.com/AngularClass/angular2-webpack-starter)
* @qdouble for his [Angular2Webpack2 Starter](https://github.com/qdouble/angular2webpack2-starter)

## License
MIT
