import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        HomeRoutingModule
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {
}
