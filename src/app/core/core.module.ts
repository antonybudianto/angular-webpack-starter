import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarModule } from './navbar/navbar.module';
import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
    imports: [
        CommonModule,
        NavbarModule
    ],
    exports: [
        NavbarModule
    ]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: []
        };
    }

    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throwIfAlreadyLoaded(parentModule, 'CoreModule');
        }
    }
}
