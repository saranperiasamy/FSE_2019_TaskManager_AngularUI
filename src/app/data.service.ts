import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  task;
  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get('http://localhost:8081/tasks')
  }

  getParentTasks() {
    return this.http.get('http://localhost:8081/tasks/parents')
  }

  addTask(task : any){
    console.log("Inside API call")
    return this.http.post<any>('http://localhost:8081/tasks',task)
  }

  updTask(task : Task) {
    console.log("Inside Update - PUT API Call..")
    console.log(task)
    return this.http.put<any>('http://localhost:8081/tasks',task)
  }

  setTaskDetail(task){
    this.task = task;
  }

  getTaskDetail() {
    return this.task;
  }
}
