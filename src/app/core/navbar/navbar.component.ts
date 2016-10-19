import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
    @Input() brand: string;
}
