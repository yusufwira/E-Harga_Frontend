import { TestBed } from '@angular/core/testing';

import { AdminopdServiceService } from './adminopd-service.service';

describe('AdminopdServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminopdServiceService = TestBed.get(AdminopdServiceService);
    expect(service).toBeTruthy();
  });
});
