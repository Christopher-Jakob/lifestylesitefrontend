import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsemembersComponent } from './browsemembers.component';

describe('BrowsemembersComponent', () => {
  let component: BrowsemembersComponent;
  let fixture: ComponentFixture<BrowsemembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowsemembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsemembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
