import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchedswingattributesComponent } from './matchedswingattributes.component';

describe('MatchedswingattributesComponent', () => {
  let component: MatchedswingattributesComponent;
  let fixture: ComponentFixture<MatchedswingattributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchedswingattributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchedswingattributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
