import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistviewComponent } from './therapistview.component';

describe('TherapistviewComponent', () => {
  let component: TherapistviewComponent;
  let fixture: ComponentFixture<TherapistviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherapistviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
