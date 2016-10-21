import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

import { AppModuleNgFactory } from './compiled/src/app/app.module.ngfactory';

if (process.env.APP_ENV === 'production') {
    enableProdMode();
}

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
