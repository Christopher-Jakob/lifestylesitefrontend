import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwingerbodytypesComponent } from './swingerbodytypes.component';

describe('SwingerbodytypesComponent', () => {
  let component: SwingerbodytypesComponent;
  let fixture: ComponentFixture<SwingerbodytypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwingerbodytypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwingerbodytypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
