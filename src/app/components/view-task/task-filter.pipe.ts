import { PipeTransform, Pipe } from '@angular/core';
import { Task } from 'src/app/task';

@Pipe ({
    name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {
    transform(tasks: Task[], searchTask: string) : Task[] {
        if(!tasks || !searchTask ) {
            return tasks;
        }
        return tasks.filter(task => 
            task.taskName.toLowerCase().indexOf(searchTask.toLowerCase()) !== -1
            );
    }
}