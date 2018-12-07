import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwingersignupComponent } from './swingersignup.component';

describe('SwingersignupComponent', () => {
  let component: SwingersignupComponent;
  let fixture: ComponentFixture<SwingersignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwingersignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwingersignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
