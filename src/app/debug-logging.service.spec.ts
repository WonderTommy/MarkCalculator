import { TestBed } from '@angular/core/testing';

import { DebugLoggingService } from './debug-logging.service';

describe('DebugLoggingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DebugLoggingService = TestBed.get(DebugLoggingService);
    expect(service).toBeTruthy();
  });
});
