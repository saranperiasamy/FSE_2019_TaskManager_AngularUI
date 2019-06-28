import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { DataService } from 'src/app/data.service';
import { Task } from 'src/app/task';
import { Router } from '@angular/router'
import { ParentTask } from 'src/app/parent-task';

@Component({
  selector: 'app-upd-task',
  templateUrl: './upd-task.component.html',
  styleUrls: ['./upd-task.component.css']
})
export class UpdTaskComponent implements OnInit {

  taskModel : Task;
  successMessage = "";
  task : Task;
  parentTasks: ParentTask [];

  constructor(private dataService: DataService, private router : Router){
    this.task = this.dataService.getTaskDetail();
    this.taskModel = new Task(
      this.task.taskId,
      this.task.taskName,
      this.task.priority,
      this.task.startDate,
      this.task.endDate,
      this.task.completed,
      this.task.parentTask ||  new ParentTask(null, null)
    );
    console.log(this.taskModel);
    this.successMessage = "";
  }

  setParentId(parentName) : void{
      this.parentTasks.forEach((task) =>{
        if(task.parentTaskName === parentName){
          this.taskModel.parentTask.parentId = task.parentId
        }
      })    
  } 

  onSubmit(){
    console.log(this.taskModel)
    this.dataService.updTask(this.taskModel).subscribe(
      data=> {
        console.log('Success !!', data);
        this.successMessage = "Task Updated Successfully!";
        this.resetForm();
        this.router.navigate(["tasks/view"])
      },
      error=> console.log('Error ',error)
    )
  }
  ngOnInit() {
    
    this.dataService.getParentTasks().subscribe(
      data => {
        
        this.parentTasks = data as ParentTask[]
        console.log('All Parent Tasks..', this.parentTasks)
      }
    )

  } 
  resetForm() : void{
    this.taskModel = new Task(null, '', null, '', '',0,null);
  }

  resetMessage() : void{
    this.successMessage = "";
  }

  cancelUpdate() {
    this.router.navigate(["tasks/view"])
  }
}
