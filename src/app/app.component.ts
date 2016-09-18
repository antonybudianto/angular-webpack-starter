import { Component } from '@angular/core';

import { CONSTANTS } from './shared';

import '../style.css';

@Component({
    selector: 'as-main-app',
    templateUrl: 'app.html'
})
export class AppComponent {
    public appBrand: string;

    constructor() {
        this.appBrand = CONSTANTS.MAIN.APP.BRAND;
    }
}
