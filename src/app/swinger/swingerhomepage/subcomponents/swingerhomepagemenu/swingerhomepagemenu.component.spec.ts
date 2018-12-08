import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwingerhomepagemenuComponent } from './swingerhomepagemenu.component';

describe('SwingerhomepagemenuComponent', () => {
  let component: SwingerhomepagemenuComponent;
  let fixture: ComponentFixture<SwingerhomepagemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwingerhomepagemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwingerhomepagemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
