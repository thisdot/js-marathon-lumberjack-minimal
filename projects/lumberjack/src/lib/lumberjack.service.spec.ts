import { TestBed } from '@angular/core/testing';

import { LumberjackService } from './lumberjack.service';

describe('LumberjackService', () => {
  let service: LumberjackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LumberjackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
