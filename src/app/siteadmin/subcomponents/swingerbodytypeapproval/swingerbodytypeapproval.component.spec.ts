import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwingerbodytypeapprovalComponent } from './swingerbodytypeapproval.component';

describe('SwingerbodytypeapprovalComponent', () => {
  let component: SwingerbodytypeapprovalComponent;
  let fixture: ComponentFixture<SwingerbodytypeapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwingerbodytypeapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwingerbodytypeapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
