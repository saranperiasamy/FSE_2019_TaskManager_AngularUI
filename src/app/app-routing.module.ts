import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { UpdTaskComponent } from './components/upd-task/upd-task.component';

const routes: Routes = [
  { path: '', component: AddTaskComponent },
  { path: 'tasks/add', component: AddTaskComponent},
  { path: 'tasks/view', component: ViewTaskComponent},
  { path: 'tasks/update', component: UpdTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
