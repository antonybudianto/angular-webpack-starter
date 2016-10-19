import { Component } from '@angular/core';

import { MAIN } from './shared/constant/main';

import '../style.css';

@Component({
    selector: 'app-main',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    public appBrand: string;

    constructor() {
        this.appBrand = MAIN.APP.BRAND;
    }
}
