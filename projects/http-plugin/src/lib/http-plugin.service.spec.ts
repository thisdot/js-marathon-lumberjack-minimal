import { TestBed } from '@angular/core/testing';

import { HttpPluginService } from './http-plugin.service';

describe('HttpPluginService', () => {
  let service: HttpPluginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpPluginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
