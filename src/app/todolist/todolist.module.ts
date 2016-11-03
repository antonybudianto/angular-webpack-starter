import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CompletedFilterPipe } from './completed-filter.pipe';
import { TodolistComponent } from './todolist.component';
import { TodolistRoutingModule } from './todolist-routing.module';

@NgModule({
    declarations: [
        CompletedFilterPipe,
        TodolistComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        TodolistRoutingModule
    ],
    exports: [
        CompletedFilterPipe,
        TodolistComponent
    ]
})
export class TodolistModule {
}
