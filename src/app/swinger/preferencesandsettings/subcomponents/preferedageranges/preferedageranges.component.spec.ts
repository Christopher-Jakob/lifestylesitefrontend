import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferedagerangesComponent } from './preferedageranges.component';

describe('PreferedagerangesComponent', () => {
  let component: PreferedagerangesComponent;
  let fixture: ComponentFixture<PreferedagerangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferedagerangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferedagerangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
