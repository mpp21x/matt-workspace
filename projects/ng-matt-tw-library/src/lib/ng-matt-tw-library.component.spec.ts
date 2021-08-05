import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMattTwLibraryComponent } from './ng-matt-tw-library.component';

describe('NgMattTwLibraryComponent', () => {
  let component: NgMattTwLibraryComponent;
  let fixture: ComponentFixture<NgMattTwLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgMattTwLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMattTwLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
