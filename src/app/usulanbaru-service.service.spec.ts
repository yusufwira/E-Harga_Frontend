import { TestBed } from '@angular/core/testing';

import { UsulanbaruServiceService } from './usulanbaru-service.service';

describe('UsulanbaruServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsulanbaruServiceService = TestBed.get(UsulanbaruServiceService);
    expect(service).toBeTruthy();
  });
});
