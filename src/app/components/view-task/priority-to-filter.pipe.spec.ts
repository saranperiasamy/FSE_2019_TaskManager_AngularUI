import { PriorityToFilterPipe } from './priority-to-filter.pipe';
import { Task } from 'src/app/task';

describe('PriorityToFilterPipe', () => {
  let pipe = new PriorityToFilterPipe();
  let tasks : Task [];

  beforeEach(() => {
    tasks = [
              new Task(1, 'Sample Task-1',1,'2019-04-08','2019-04-08',1,null),
              new Task(2, 'Sample Task-2',10,'2019-04-08','2019-06-10',1,null),
              new Task(3, 'Sample Task-3',15,'2019-06-01','2019-06-10',1,null),
            ]
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return tasks as is when there is no To-Priority filter given', ()=> {
    let priorityFilter = "";
    expect(pipe.transform(tasks,priorityFilter)).toBe(tasks);
  })

  it('should return all tasks that have Priority value less than or equal to To-Priority filter', ()=> {
    let priorityFilter = 10;
    expect(pipe.transform(tasks,priorityFilter).length).toBe(2);
  })
});
