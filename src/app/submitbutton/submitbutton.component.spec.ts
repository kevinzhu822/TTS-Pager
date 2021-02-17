import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SubmitbuttonComponent } from './submitbutton.component';

describe('SubmitbuttonComponent', () => {
  let component: SubmitbuttonComponent;
  let fixture: ComponentFixture<SubmitbuttonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
