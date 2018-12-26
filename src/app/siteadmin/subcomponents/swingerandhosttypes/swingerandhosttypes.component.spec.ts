import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwingerandhosttypesComponent } from './swingerandhosttypes.component';

describe('SwingerandhosttypesComponent', () => {
  let component: SwingerandhosttypesComponent;
  let fixture: ComponentFixture<SwingerandhosttypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwingerandhosttypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwingerandhosttypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
