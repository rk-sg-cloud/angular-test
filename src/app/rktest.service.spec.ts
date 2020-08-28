import { TestBed } from '@angular/core/testing';

import { RktestService } from './rktest.service';

describe('RktestService', () => {
  let service: RktestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RktestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
