import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SextypeandethnictypesComponent } from './sextypeandethnictypes.component';

describe('SextypeandethnictypesComponent', () => {
  let component: SextypeandethnictypesComponent;
  let fixture: ComponentFixture<SextypeandethnictypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SextypeandethnictypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SextypeandethnictypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
