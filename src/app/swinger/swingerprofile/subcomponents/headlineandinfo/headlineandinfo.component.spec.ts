import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineandinfoComponent } from './headlineandinfo.component';

describe('HeadlineandinfoComponent', () => {
  let component: HeadlineandinfoComponent;
  let fixture: ComponentFixture<HeadlineandinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadlineandinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlineandinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
