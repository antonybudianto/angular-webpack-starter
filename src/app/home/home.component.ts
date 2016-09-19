import { Component } from '@angular/core';

@Component({
    selector: 'as-home',
    templateUrl: './home.html',
    styleUrls: [
        './home.css'
    ]
})
export class HomeComponent {
    logoSource: string;

    constructor() {
        this.logoSource = require('../../public/images/ng2.jpg');
    }
}
