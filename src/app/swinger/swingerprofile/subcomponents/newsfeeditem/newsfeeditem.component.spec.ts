import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeeditemComponent } from './newsfeeditem.component';

describe('NewsfeeditemComponent', () => {
  let component: NewsfeeditemComponent;
  let fixture: ComponentFixture<NewsfeeditemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsfeeditemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeeditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
