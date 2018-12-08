import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwingerprofileComponent } from './swingerprofile.component';

describe('SwingerprofileComponent', () => {
  let component: SwingerprofileComponent;
  let fixture: ComponentFixture<SwingerprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwingerprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwingerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
