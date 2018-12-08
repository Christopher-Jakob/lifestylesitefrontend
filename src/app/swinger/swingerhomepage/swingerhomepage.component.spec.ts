import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwingerhomepageComponent } from './swingerhomepage.component';

describe('SwingerhomepageComponent', () => {
  let component: SwingerhomepageComponent;
  let fixture: ComponentFixture<SwingerhomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwingerhomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwingerhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
