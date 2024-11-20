import { TestBed } from '@angular/core/testing';

import { CursedKatanasService } from './cursed-katanas.service';

describe('CursedKatanasService', () => {
  let service: CursedKatanasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursedKatanasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
