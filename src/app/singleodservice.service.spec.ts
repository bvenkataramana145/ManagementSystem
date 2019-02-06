import { TestBed } from '@angular/core/testing';

import { SingleodserviceService } from './singleodservice.service';

describe('SingleodserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingleodserviceService = TestBed.get(SingleodserviceService);
    expect(service).toBeTruthy();
  });
});
