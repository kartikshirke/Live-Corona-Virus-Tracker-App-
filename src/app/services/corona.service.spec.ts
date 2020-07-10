import { TestBed } from '@angular/core/testing';

import { CronaserviceService } from './cronaservice.service';

describe('CronaserviceService', () => {
  let service: CronaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CronaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
