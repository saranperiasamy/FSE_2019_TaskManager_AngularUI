import { Pipe, PipeTransform } from '@angular/core';
import { Task } from 'src/app/task';

@Pipe({
  name: 'priorityToFilter'
})
export class PriorityToFilterPipe implements PipeTransform {

  transform(tasks: any, searchPriorityTo: any): Task[] {
    if(!tasks || !searchPriorityTo) {
      return tasks;
    }
  return tasks.filter(task => 
      task.priority <= searchPriorityTo
      );
  }
}

