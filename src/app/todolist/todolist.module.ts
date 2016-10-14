import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CompletedFilterPipe } from './completed-filter.pipe';
import { TodolistComponent } from './todolist.component';
import { TodolistRoutes } from './todolist.routes';

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
