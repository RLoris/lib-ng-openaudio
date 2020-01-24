import { TestBed } from '@angular/core/testing';

import { NgOpenaudioService } from './ng-openaudio.service';

describe('NgOpenaudioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgOpenaudioService = TestBed.get(NgOpenaudioService);
    expect(service).toBeTruthy();
  });
});
