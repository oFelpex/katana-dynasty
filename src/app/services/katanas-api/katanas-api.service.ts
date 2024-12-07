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

  createCommonKatana(newKatana: CommonKatanas) {
    return this.http.post<CommonKatanas[]>(
      'https://katana-dynasty.vercel.app/api/common-katanas',
      newKatana
    );
  }
  createLegendaryKatana(newKatana: LegendaryKatanas) {
    return this.http.post<LegendaryKatanas[]>(
      'https://katana-dynasty.vercel.app/api/legendary-katanas',
      newKatana
    );
  }
  createMagicKatana(newKatana: MagicKatanas) {
    return this.http.post<MagicKatanas[]>(
      'https://katana-dynasty.vercel.app/api/magic-katanas',
      newKatana
    );
  }
  createCursedKatana(newKatana: CursedKatanas) {
    return this.http.post<CursedKatanas[]>(
      'https://katana-dynasty.vercel.app/api/cursed-katanas',
      newKatana
    );
  }
}
