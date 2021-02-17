import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TherapistsComponent } from './therapists.component';

describe('TherapistsComponent', () => {
  let component: TherapistsComponent;
  let fixture: ComponentFixture<TherapistsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TherapistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
