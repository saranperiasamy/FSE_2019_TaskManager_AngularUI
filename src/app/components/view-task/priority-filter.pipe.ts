import { Pipe, PipeTransform } from '@angular/core';
import { Task } from 'src/app/task';

@Pipe({
  name: 'priorityFilter'
})
export class PriorityFilterPipe implements PipeTransform {

  transform(tasks: any, searchPriorityFrom: any): Task[] {
    if(!tasks || !searchPriorityFrom) {
      return tasks;
    }
  return tasks.filter(task => 
      task.priority >= searchPriorityFrom
      );
  }
}
