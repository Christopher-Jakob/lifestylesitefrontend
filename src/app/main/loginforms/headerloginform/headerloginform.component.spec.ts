import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderloginformComponent } from './headerloginform.component';

describe('HeaderloginformComponent', () => {
  let component: HeaderloginformComponent;
  let fixture: ComponentFixture<HeaderloginformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderloginformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderloginformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
