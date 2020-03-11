import { TestBed } from '@angular/core/testing';

import { OperatoropdServiceService } from './operatoropd-service.service';

describe('OperatoropdServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OperatoropdServiceService = TestBed.get(OperatoropdServiceService);
    expect(service).toBeTruthy();
  });
});
