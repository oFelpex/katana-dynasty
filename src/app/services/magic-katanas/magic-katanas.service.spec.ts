import { TestBed } from '@angular/core/testing';

import { MagicKatanasService } from './magic-katanas.service';

describe('MagicKatanasService', () => {
  let service: MagicKatanasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagicKatanasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
