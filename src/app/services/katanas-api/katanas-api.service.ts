import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit } from '@angular/core';
import { BaseKatana } from '../../models/base-katanas';
import { CommonKatanas } from '../../models/common-katanas';
import { LegendaryKatanas } from '../../models/legendary-katanas';
import { MagicKatanas } from '../../models/magic-katanas';
import { CursedKatanas } from '../../models/cursed-katanas';
import { CommonKatanasService } from '../common-katanas/common-katanas.service';
import { CursedKatanasService } from '../cursed-katanas/cursed-katanas.service';
import { LegendaryKatanasService } from '../legendary-katanas/legendary-katanas.service';
import { MagicKatanasService } from '../magic-katanas/magic-katanas.service';

@Injectable({
  providedIn: 'root',
})
export class KatanasAPIService {
  http: HttpClient;
  commonKatanasService: CommonKatanasService;
  legendaryKatanasService: LegendaryKatanasService;
  magicKatanasService: MagicKatanasService;
  cursedKatanasService: CursedKatanasService;
  commonId: number = 0;
  legendaryId: number = 0;
  magicId: number = 0;
  cursedId: number = 0;

  constructor() {
    this.http = inject(HttpClient);
    this.commonKatanasService = inject(CommonKatanasService);
    this.legendaryKatanasService = inject(LegendaryKatanasService);
    this.magicKatanasService = inject(MagicKatanasService);
    this.cursedKatanasService = inject(CursedKatanasService);

    this.commonKatanasService.getCommonKatanasFromAPI().subscribe({
      next: (katanas) => {
        this.commonId = katanas.length;
      },
      error: (err) => {
        console.error('Error when searching for katanas on the API: ', err);
      },
    });
    this.legendaryKatanasService.getLegendaryKatanasFromAPI().subscribe({
      next: (katanas) => {
        this.legendaryId = katanas.length;
      },
      error: (err) => {
        console.error('Error when searching for katanas on the API: ', err);
      },
    });
    this.magicKatanasService.getMagicKatanasFromAPI().subscribe({
      next: (katanas) => {
        this.magicId = katanas.length;
      },
      error: (err) => {
        console.error('Error when searching for katanas on the API: ', err);
      },
    });
    this.cursedKatanasService.getCursedKatanasFromAPI().subscribe({
      next: (katanas) => {
        this.cursedId = katanas.length;
      },
      error: (err) => {
        console.error('Error when searching for katanas on the API: ', err);
      },
    });
  }

  createCommonKatana(newKatana: CommonKatanas) {
    newKatana.id = this.commonId;
    return this.http.post<CommonKatanas[]>(
      'http://localhost:3000/common-katanas',
      newKatana
    );
  }
  createLegendaryKatana(newKatana: LegendaryKatanas) {
    newKatana.id = this.legendaryId;
    return this.http.post<LegendaryKatanas[]>(
      'http://localhost:3000/legendary-katanas',
      newKatana
    );
  }
  createMagicKatana(newKatana: MagicKatanas) {
    newKatana.id = this.magicId;
    return this.http.post<MagicKatanas[]>(
      'http://localhost:3000/magic-katanas',
      newKatana
    );
  }
  createCursedKatana(newKatana: CursedKatanas) {
    newKatana.id = this.cursedId;
    return this.http.post<CursedKatanas[]>(
      'http://localhost:3000/cursed-katanas',
      newKatana
    );
  }
}
