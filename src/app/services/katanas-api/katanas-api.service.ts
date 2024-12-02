import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BaseKatana } from '../../models/base-katanas';
import { CommonKatanas } from '../../models/common-katanas';
import { LegendaryKatanas } from '../../models/legendary-katanas';
import { MagicKatanas } from '../../models/magic-katanas';
import { CursedKatanas } from '../../models/cursed-katanas';

@Injectable({
  providedIn: 'root',
})
export class KatanasAPIService {
  http: HttpClient;

  constructor() {
    this.http = inject(HttpClient);
  }

  getAllKatanas() {
    return this.http.get<BaseKatana[]>('http://localhost:3000/games');
  }

  createCommonKatana(newKatana: CommonKatanas) {
    return this.http.post<CommonKatanas[]>(
      'http://localhost:3000/common-katanas',
      newKatana
    );
  }
  createLegendaryKatana(newKatana: LegendaryKatanas) {
    return this.http.post<LegendaryKatanas[]>(
      'http://localhost:3000/legendary-katanas',
      newKatana
    );
  }
  createMagicKatana(newKatana: MagicKatanas) {
    return this.http.post<MagicKatanas[]>(
      'http://localhost:3000/magic-katanas',
      newKatana
    );
  }
  createCursedKatana(newKatana: CursedKatanas) {
    return this.http.post<CursedKatanas[]>(
      'http://localhost:3000/cursed-katanas',
      newKatana
    );
  }
}
