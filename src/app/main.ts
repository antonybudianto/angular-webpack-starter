import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, ApplicationRef } from '@angular/core';
import { removeNgStyles, createNewHosts, createInputTransfer, bootloader } from '@angularclass/hmr';

import { AppComponent } from './app.component';
import { AppStore } from './app-store';
import { AppModule } from './app.module';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppModule
    ],
    providers: [
        AppStore
    ]
})
class MainModule {
    constructor(public appRef: ApplicationRef, public appStore: AppStore) {}

    hmrOnInit(store: any) {
        if (!store || !store.state) { return; }
        console.log('HMR store', JSON.stringify(store, null, 2));
        // restore state
        this.appStore.setState(store.state);
        // restore input values
        if ('restoreInputValues' in store) { store.restoreInputValues(); }
        this.appRef.tick();
        Object.keys(store).forEach(prop => delete store[prop]);
    }

    hmrOnDestroy(store: any) {
        const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        const currentState = this.appStore.getState();
        store.state = currentState;
        // recreate elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // save input values
        store.restoreInputValues  = createInputTransfer();
        // remove styles
        removeNgStyles();
    }

    hmrAfterDestroy(store: any) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }
}

export function main() {
    return platformBrowserDynamic().bootstrapModule(MainModule);
}

// boot on document ready
bootloader(main);
