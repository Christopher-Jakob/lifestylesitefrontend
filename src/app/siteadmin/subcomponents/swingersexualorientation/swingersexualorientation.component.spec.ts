import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwingersexualorientationComponent } from './swingersexualorientation.component';

describe('SwingersexualorientationComponent', () => {
  let component: SwingersexualorientationComponent;
  let fixture: ComponentFixture<SwingersexualorientationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwingersexualorientationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwingersexualorientationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
