import { Pipe, PipeTransform } from '@angular/core';
import { Task } from 'src/app/task';

@Pipe({
  name: 'endDateFilter'
})
export class EndDateFilterPipe implements PipeTransform {

  transform(tasks: any, searchEndDate: any): Task[] {
    if(!tasks || !searchEndDate) {
      return tasks;
    }
    return tasks.filter(task => 
        task.endDate <= searchEndDate
        );
    }
}
