import { TestBed } from '@angular/core/testing';

import { UsulanServiceService } from './usulan-service.service';

describe('UsulanServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsulanServiceService = TestBed.get(UsulanServiceService);
    expect(service).toBeTruthy();
  });
});
