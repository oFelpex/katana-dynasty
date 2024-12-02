import { TestBed } from '@angular/core/testing';

import { KatanasAPIService } from './katanas-api.service';

describe('KatanasAPIService', () => {
  let service: KatanasAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KatanasAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
