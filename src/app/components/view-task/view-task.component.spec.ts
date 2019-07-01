import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaskComponent } from './view-task.component';
import { DataService } from 'src/app/data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { TaskFilterPipe } from './task-filter.pipe';
import { ParentTaskFilterPipe } from './parent-task-filter.pipe';
import { PriorityFilterPipe } from './priority-filter.pipe';
import { StartDateFilterPipe } from './start-date-filter.pipe';
import { PriorityToFilterPipe } from './priority-to-filter.pipe';
import { EndDateFilterPipe } from './end-date-filter.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { UpdTaskComponent } from '../upd-task/upd-task.component';

describe('ViewTaskComponent', () => {
  let component: ViewTaskComponent;
  let fixture: ComponentFixture<ViewTaskComponent>;
  let dataServiceStub : Partial<DataService>;

  dataServiceStub = {

  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [
                  FormsModule,
                  HttpClientTestingModule,
                  RouterTestingModule.withRoutes([
                    { path: 'tasks/view', component: ViewTaskComponent},
                    { path: 'tasks/update', component: UpdTaskComponent}
                  ])
                ], 
      declarations: [   
                        ViewTaskComponent,
                        UpdTaskComponent,
                        TaskFilterPipe,
                        ParentTaskFilterPipe,
                        PriorityFilterPipe,
                        StartDateFilterPipe,
                        PriorityToFilterPipe,
                        EndDateFilterPipe
                    ],
      providers: [ {provide : DataService, useValue: dataServiceStub}]
    }) 
    .compileComponents();
  }));

  beforeEach(() => {
    // fixture = TestBed.createComponent(ViewTaskComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
  });

  // it('should load all the tasks from the REST api', () => {
  //   let service = TestBed.get(DataService);
  //   //Alternative way to create service instance
  //   // fixture.debugElement.injector.get(DataService);
  //   let spy = spyOn(service,'getTasks').and.callThrough();

  //   fixture.detectChanges();

  //   expect(component.ngOnInit).toHaveBeenCalled();
  // });

});
