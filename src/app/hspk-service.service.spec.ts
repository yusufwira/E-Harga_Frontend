import { TestBed } from '@angular/core/testing';

import { HspkServiceService } from './hspk-service.service';

describe('HspkServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HspkServiceService = TestBed.get(HspkServiceService);
    expect(service).toBeTruthy();
  });
});
