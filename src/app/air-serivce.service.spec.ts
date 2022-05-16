import { TestBed } from '@angular/core/testing';

import { AirSerivceService } from './air-serivce.service';

describe('AirSerivceService', () => {
  let service: AirSerivceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirSerivceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
