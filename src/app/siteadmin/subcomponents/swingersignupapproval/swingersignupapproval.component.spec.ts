import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwingersignupapprovalComponent } from './swingersignupapproval.component';

describe('SwingersignupapprovalComponent', () => {
  let component: SwingersignupapprovalComponent;
  let fixture: ComponentFixture<SwingersignupapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwingersignupapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwingersignupapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
