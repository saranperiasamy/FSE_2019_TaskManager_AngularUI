import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdTaskComponent } from './upd-task.component';

describe('UpdTaskComponent', () => {
  let component: UpdTaskComponent;
  let fixture: ComponentFixture<UpdTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
