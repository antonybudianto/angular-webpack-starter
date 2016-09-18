import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

import { Todo } from './todo.model';

@Pipe({
    name: 'asCompletedFilter'
})
export class CompletedFilterPipe implements PipeTransform {
    transform(todos: Todo[], done: boolean): Todo[] {
        if (done) {
            return todos;
        }

        return _.filter(todos, {done});
    }
}
