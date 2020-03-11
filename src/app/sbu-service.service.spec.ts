import { TestBed } from '@angular/core/testing';

import { SbuServiceService } from './sbu-service.service';

describe('SbuServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SbuServiceService = TestBed.get(SbuServiceService);
    expect(service).toBeTruthy();
  });
});
