import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompletedFilterPipe, TodolistComponent, TodolistRoutes } from './index';

@NgModule({
    declarations: [
        CompletedFilterPipe,
        TodolistComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(TodolistRoutes)
    ],
    exports: [
        CompletedFilterPipe,
        TodolistComponent
    ]
})
export class TodolistModule {
}
