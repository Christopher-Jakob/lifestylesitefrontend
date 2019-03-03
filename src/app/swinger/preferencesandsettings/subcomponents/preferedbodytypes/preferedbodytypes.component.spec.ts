import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferedbodytypesComponent } from './preferedbodytypes.component';

describe('PreferedbodytypesComponent', () => {
  let component: PreferedbodytypesComponent;
  let fixture: ComponentFixture<PreferedbodytypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferedbodytypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferedbodytypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
