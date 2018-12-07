import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferencesandsettingsComponent } from './preferencesandsettings.component';

describe('PreferencesandsettingsComponent', () => {
  let component: PreferencesandsettingsComponent;
  let fixture: ComponentFixture<PreferencesandsettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferencesandsettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferencesandsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
