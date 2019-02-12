import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferedswingertypesComponent } from './preferedswingertypes.component';

describe('PreferedswingertypesComponent', () => {
  let component: PreferedswingertypesComponent;
  let fixture: ComponentFixture<PreferedswingertypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferedswingertypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferedswingertypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
