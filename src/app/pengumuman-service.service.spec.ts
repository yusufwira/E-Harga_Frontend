import { TestBed } from '@angular/core/testing';

import { PengumumanServiceService } from './pengumuman-service.service';

describe('PengumumanServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PengumumanServiceService = TestBed.get(PengumumanServiceService);
    expect(service).toBeTruthy();
  });
});
