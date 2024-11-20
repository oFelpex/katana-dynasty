import { TestBed } from '@angular/core/testing';

import { LegendaryKatanasService } from './legendary-katanas.service';

describe('LegendaryKatanasService', () => {
  let service: LegendaryKatanasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegendaryKatanasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
