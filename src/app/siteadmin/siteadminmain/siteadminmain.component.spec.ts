import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteadminmainComponent } from './siteadminmain.component';

describe('SiteadminmainComponent', () => {
  let component: SiteadminmainComponent;
  let fixture: ComponentFixture<SiteadminmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteadminmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteadminmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
