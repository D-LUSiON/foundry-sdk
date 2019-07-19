import { TestBed } from '@angular/core/testing';

import { ResizerEventsService } from './resizer-events.service';

describe('ResizerEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResizerEventsService = TestBed.get(ResizerEventsService);
    expect(service).toBeTruthy();
  });
});
