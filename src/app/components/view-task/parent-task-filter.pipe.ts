import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parentTaskFilter'
})
export class ParentTaskFilterPipe implements PipeTransform {

  transform(tasks: any, searchParent: any): any {
    if(!tasks || !searchParent ) {
      return tasks;
    }
  return tasks.filter(task => 
      task.parentTask.parentTaskName.toLowerCase().indexOf(searchParent.toLowerCase()) !== -1
      );
  }

}
