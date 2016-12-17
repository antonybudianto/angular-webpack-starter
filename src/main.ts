import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';

if (process.env.APP_ENV === 'production') {
  enableProdMode();
}

const bootstrap = () => {
  return platformBrowserDynamic().bootstrapModule(AppModule);
};

if (process.env.APP_ENV === 'development' && module['hot']) {
  require('./hmr').hmrBootstrap(module, bootstrap);
} else {
  bootstrap();
}
