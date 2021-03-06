import { ParentTaskFilterPipe } from './parent-task-filter.pipe';
import { Task } from 'src/app/task';

describe('ParentTaskFilterPipe', () => {
  let pipe = new ParentTaskFilterPipe();
  let tasks : Task [];

  beforeEach(() => {
    tasks = [
              new Task(1, 'Sample Task-1',1,'2019-04-08','2019-04-08',1,{parentId: 0, parentTaskName:''}),
              new Task(2, 'Sample Task-2',1,'2019-04-08','2019-06-10',1,{parentId: 1, parentTaskName:'Sample Task-1'}),
              new Task(3, 'Sample Task-3',1,'2019-06-01','2019-06-10',1,{parentId: 0, parentTaskName:''}),
            ]
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return tasks as is when there is no Parent Task name filter given', ()=> {
    let parentTaskFilter = "";
    expect(pipe.transform(tasks,parentTaskFilter)).toBe(tasks);
  })

  it('should return tasks with parent tasks that contain parent task filter with no case sensitivity', ()=> {
    let parentTaskFilter = 'sample';
    expect(pipe.transform(tasks,parentTaskFilter).length).toBe(1);
  })
});
