import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { DataService } from 'src/app/data.service';
import { Task } from 'src/app/task';
import { ParentTask } from 'src/app/parent-task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  taskModel: Task;
  parentTasks: ParentTask[] = [];
 
  successMessage = "";
  constructor(private dataService: DataService) {
    this.taskModel = new Task(null, '', 0, '', '', 0, new ParentTask(0, null));
    this.successMessage = "";
  }

  onSubmit() {
    console.log(this.taskModel)
    this.dataService.addTask(this.taskModel).subscribe(
      data => {
        console.log('Success !!', data);
        //alert("Task Created Successfully!") 
        this.successMessage = "Task Created Successfully!";
        this.resetForm();
      },
      error => console.log('Error ', error)
    )
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(): void {
    // this.taskModel.priority = 0;
    // this.taskModel.taskName = null;
    // this.taskModel.startDate = null;
    // this.taskModel.endDate = null;

    this.dataService.getParentTasks().subscribe(
      data => {
        this.parentTasks = data as ParentTask[]
        console.log('All Parent Tasks..', this.parentTasks)
      }
    )
  }

  resetMessage(): void {
    this.successMessage = "";
  }

}
