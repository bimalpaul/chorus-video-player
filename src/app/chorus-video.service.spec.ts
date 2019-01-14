import { TestBed } from '@angular/core/testing';

import { ChorusVideoService } from './chorus-video.service';

describe('ChorusVideoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChorusVideoService = TestBed.get(ChorusVideoService);
    expect(service).toBeTruthy();
  });
});
