import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import { Task } from 'src/app/task';
import { ParentTask } from 'src/app/parent-task';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

    tasks = [];
    filteredTasks = [];
    successMessage;

    // private _searchTask: string;
    // private _searchParentTask: string;

    // get searchTask() : string {
    //   return this._searchTask;
    // }
    // set searchTask(searchVal : string) {
    //   this._searchTask = searchVal
    //   this.filteredTasks = this.filterForTasks(searchVal);
    // }
    
    // get searchParent() : string{
    //   return this._searchParentTask;
    // }

    // set searchParent(searchVal : string) {
    //   this._searchParentTask = searchVal
    //   this.filteredTasks = this.filterForParentTasks(searchVal);
    // }
  
    // filterForParentTasks(searchVal : string) {
    //   this.filteredTasks.filter(task => 
    //     return (task.parentTask) ?  task.parentTask.parentTaskName.indexOf("F") != -1
    //     );
    // }

    // filterForTasks(searchVal : string) {
    //   return this.filteredTasks.filter(task => 
    //     task.taskName.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1
    //     );
    // }
    
    constructor(private data: DataService, private router : Router) { }
  
    ngOnInit() {
        this.data.getTasks().subscribe( data => {
         
          Object.keys(data).forEach(key => {
            if(!data[key].parentTask){
              data[key].parentTask = new ParentTask(0, "")
            }
            console.log(data[key])
            this.tasks.push(data[key])
            this.filteredTasks.push(data[key])
        });
        //this.tasks = data as Task[];

        
      })
    }

    editTask(task) : void{
      if(!task.completed)
      {
        this.data.setTaskDetail(task);
        this.router.navigate(["tasks/update"])
      }
      
    }

    endTask(task) : void{
      if(!task.completed)
      {
        task.completed = 1;
        this.data.setTaskDetail(task);
        this.data.updTask(task).subscribe(
          data=> {
            console.log('Success Completed Successfully!!', data);
            this.successMessage = 'Task Completed Successfully!!';
            this.router.navigate(["tasks/view"])
          },
          error=> console.log('Error ',error)
        )
      }
    }
  
  }
