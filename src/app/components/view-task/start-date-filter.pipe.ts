import { Pipe, PipeTransform } from '@angular/core';
import { Task } from 'src/app/task';

@Pipe({
  name: 'startDateFilter'
})
export class StartDateFilterPipe implements PipeTransform {

  transform(tasks: any, searchStartDate: any): Task[] {
    if(!tasks || !searchStartDate) {
      return tasks;
    }
  return tasks.filter(task => 
      task.startDate >= searchStartDate
      );
  }
}
