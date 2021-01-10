import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeAndClientComponent } from './time-and-client.component';

describe('TimeAndClientComponent', () => {
  let component: TimeAndClientComponent;
  let fixture: ComponentFixture<TimeAndClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeAndClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeAndClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
