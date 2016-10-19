import { Component } from '@angular/core';

import { Todo } from './todo.model';

@Component({
    selector: 'app-todolist',
    templateUrl: 'todolist.component.html',
    styleUrls: [
        'todolist.component.css'
    ]
})
export class TodolistComponent {
    public todo: Todo;
    public showCompleted: boolean;
    public list: Todo[];

    constructor() {
        this.showCompleted = true;
        this.todo = new Todo('Add me to list!', false);
        this.list = [
            new Todo('Its cool'),
            new Todo('Hello', true)
        ];
    }

    addTodo() {
        this.list = this.list.concat(Todo.clone(this.todo));
        this.todo.clear();
    }

    delTodo(todoIndex: number) {
        this.list = this.list.filter(
            (todo, index) => index !== todoIndex);
    }
}
