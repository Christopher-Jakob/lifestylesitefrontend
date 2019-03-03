import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferedethnicitiesComponent } from './preferedethnicities.component';

describe('PreferedethnicitiesComponent', () => {
  let component: PreferedethnicitiesComponent;
  let fixture: ComponentFixture<PreferedethnicitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferedethnicitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferedethnicitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
