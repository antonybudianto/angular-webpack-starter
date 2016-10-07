import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutingProviders, appRoutes } from './app.routes';
import { NavbarModule } from './shared';
import { HomeModule } from './home/home.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NavbarModule,
        HomeModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [ appRoutingProviders ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
