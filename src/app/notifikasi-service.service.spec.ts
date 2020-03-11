import { TestBed } from '@angular/core/testing';

import { NotifikasiServiceService } from './notifikasi-service.service';

describe('NotifikasiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotifikasiServiceService = TestBed.get(NotifikasiServiceService);
    expect(service).toBeTruthy();
  });
});
