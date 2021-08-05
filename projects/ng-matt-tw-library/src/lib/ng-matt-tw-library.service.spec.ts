import { TestBed } from '@angular/core/testing';

import { NgMattTwLibraryService } from './ng-matt-tw-library.service';

describe('NgMattTwLibraryService', () => {
  let service: NgMattTwLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgMattTwLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
