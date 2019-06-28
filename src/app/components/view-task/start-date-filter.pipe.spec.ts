import { StartDateFilterPipe } from './start-date-filter.pipe';
import { Task } from 'src/app/task';

describe('StartDateFilterPipe', () => {
  let pipe = new StartDateFilterPipe();
  let tasks : Task [];

  beforeEach(() => {
    tasks = [
              new Task(1, 'Sample Task-1',1,'2019-04-08','2019-04-08',1,null),
              new Task(2, 'Sample Task-2',1,'2019-04-08','2019-06-10',1,null),
              new Task(3, 'Sample Task-3',1,'2019-06-01','2019-06-10',1,null),
            ]
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return tasks as is when there is no Start Date filter given', ()=> {
    let startDate = "";
    expect(pipe.transform(tasks,startDate)).toBe(tasks);
  })

  it('should should return all tasks that have Stare date value greater than or equal to End Date filter', ()=> {
    let startDate = '2019-04-30';
    expect(pipe.transform(tasks,startDate).length).toBe(1);
  })
});