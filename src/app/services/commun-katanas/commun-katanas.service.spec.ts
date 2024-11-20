import { TestBed } from '@angular/core/testing';

import { CommunKatanasService } from './commun-katanas.service';

describe('CommunKatanasService', () => {
  let service: CommunKatanasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunKatanasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
