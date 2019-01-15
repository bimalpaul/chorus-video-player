import { TestBed } from '@angular/core/testing';

import { ChorusVideoService } from './chorus-video.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ChorusVideoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    const service: ChorusVideoService = TestBed.get(ChorusVideoService);
    expect(service).toBeTruthy();
  });
});
