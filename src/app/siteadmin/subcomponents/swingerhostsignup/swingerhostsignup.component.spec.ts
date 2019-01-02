import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwingerhostsignupComponent } from './swingerhostsignup.component';

describe('SwingerhostsignupComponent', () => {
  let component: SwingerhostsignupComponent;
  let fixture: ComponentFixture<SwingerhostsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwingerhostsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwingerhostsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
