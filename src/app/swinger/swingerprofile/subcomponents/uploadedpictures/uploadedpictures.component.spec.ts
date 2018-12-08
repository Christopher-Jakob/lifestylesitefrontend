import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadedpicturesComponent } from './uploadedpictures.component';

describe('UploadedpicturesComponent', () => {
  let component: UploadedpicturesComponent;
  let fixture: ComponentFixture<UploadedpicturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadedpicturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadedpicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
