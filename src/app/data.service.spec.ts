import { DataService } from './data.service';

describe('DataService', () => {
  let service : DataService;

  beforeEach(()=> {
    service = new DataService(null);
  });

  it('', () => {
    let spy = spyOn(service,'getTaskDetail').and.returnValue(null);

    service.getTaskDetail();

    //expect(service.getTaskDetail).toHaveBeenCalledWith(spy);
  });
});
