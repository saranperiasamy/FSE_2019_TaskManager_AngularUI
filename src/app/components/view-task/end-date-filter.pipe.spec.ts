import { EndDateFilterPipe } from './end-date-filter.pipe';
import { Task } from 'src/app/task';

describe('EndDateFilterPipe', () => {
  let pipe = new EndDateFilterPipe();
  let tasks : Task [];

  beforeEach(() => {
    tasks = [
              new Task(1, 'Sample Task-1',1,'2019-04-08','2019-04-08',1,null),
              new Task(2, 'Sample Task-1',1,'2019-04-08','2019-06-10',1,null),
            ]
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return tasks as is when there is no End Date filter given', ()=> {
    let endDate = "";
    expect(pipe.transform(tasks,endDate)).toBe(tasks);
  })

  it('should return all tasks that have End date value less than or equal to End Date filter', ()=> {
    let endDate = '2019-04-30';
    expect(pipe.transform(tasks,endDate).length).toBe(1);
  })
});
