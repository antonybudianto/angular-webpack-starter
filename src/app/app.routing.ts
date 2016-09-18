import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';

export const appRoutes: Routes = [
    ...HomeRoutes,
    {
        path: 'todolist',
        loadChildren: './todolist/todolist.module#TodolistModule'
    }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
