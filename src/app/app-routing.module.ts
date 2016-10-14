import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/home.routes';

const appRoutes: Routes = [
    ...HomeRoutes,
    {
        path: 'todolist',
        loadChildren: './todolist/todolist.module#TodolistModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule {

}
