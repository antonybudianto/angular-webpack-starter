import { Pipe, PipeTransform } from '@angular/core';

import { Todo } from './todo.model';

@Pipe({
    name: 'appCompletedFilter'
})
export class CompletedFilterPipe implements PipeTransform {
    transform(todos: Todo[], done: boolean): Todo[] {
        if (done) {
            return todos;
        }

        return todos.filter(todo => todo.done === done);
    }
}
