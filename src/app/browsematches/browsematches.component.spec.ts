import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsematchesComponent } from './browsematches.component';

describe('BrowsematchesComponent', () => {
  let component: BrowsematchesComponent;
  let fixture: ComponentFixture<BrowsematchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowsematchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsematchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
