import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CursedKatanas } from '../../models/cursed-katanas';
@Injectable({
  providedIn: 'root',
})
export class CursedKatanasService {
  private apiUrl = 'https://katana-dynasty.vercel.app/api/cursed-katanas';

  constructor(private http: HttpClient) {}

  getCursedKatanasFromAPI(): Observable<CursedKatanas[]> {
    return this.http.get<CursedKatanas[]>(this.apiUrl);
  }
}
