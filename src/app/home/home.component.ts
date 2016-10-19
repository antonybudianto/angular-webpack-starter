import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [
        './home.component.css'
    ]
})
export class HomeComponent {
    logoSource: string;

    constructor() {
        this.logoSource = require('../../public/images/ng2.jpg');
    }
}
