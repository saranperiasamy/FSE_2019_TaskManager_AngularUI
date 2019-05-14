import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { UpdTaskComponent } from './components/upd-task/upd-task.component';
import { TaskFilterPipe } from './components/view-task/task-filter.pipe';
import { ParentTaskFilterPipe } from './components/view-task/parent-task-filter.pipe';
import { PriorityFilterPipe } from './components/view-task/priority-filter.pipe';
import { StartDateFilterPipe } from './components/view-task/start-date-filter.pipe';
import { PriorityToFilterPipe } from './components/view-task/priority-to-filter.pipe';
import { EndDateFilterPipe } from './components/view-task/end-date-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddTaskComponent,
    ViewTaskComponent,
    UpdTaskComponent,
    TaskFilterPipe,
    ParentTaskFilterPipe,
    PriorityFilterPipe,
    StartDateFilterPipe,
    PriorityToFilterPipe,
    EndDateFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
