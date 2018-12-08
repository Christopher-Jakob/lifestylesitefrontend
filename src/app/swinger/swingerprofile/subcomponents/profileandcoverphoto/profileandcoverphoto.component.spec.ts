import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileandcoverphotoComponent } from './profileandcoverphoto.component';

describe('ProfileandcoverphotoComponent', () => {
  let component: ProfileandcoverphotoComponent;
  let fixture: ComponentFixture<ProfileandcoverphotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileandcoverphotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileandcoverphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
