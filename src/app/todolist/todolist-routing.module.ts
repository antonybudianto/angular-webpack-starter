import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodolistComponent } from './todolist.component';

export const routes: Routes = [
    { path: '', component: TodolistComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TodolistRoutingModule {
}
