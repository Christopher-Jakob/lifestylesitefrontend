import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwingersignupdeclinereasonsComponent } from './swingersignupdeclinereasons.component';

describe('SwingersignupdeclinereasonsComponent', () => {
  let component: SwingersignupdeclinereasonsComponent;
  let fixture: ComponentFixture<SwingersignupdeclinereasonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwingersignupdeclinereasonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwingersignupdeclinereasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
