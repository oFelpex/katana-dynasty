import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { MagicKatanas } from '../../models/magic-katanas';
@Injectable({
  providedIn: 'root',
})
export class MagicKatanasService {
  private apiUrl = 'https://katana-dynasty.vercel.app/api/magic-katanas';

  constructor(private http: HttpClient) {}

  getMagicKatanasFromAPI(): Observable<MagicKatanas[]> {
    return this.http.get<MagicKatanas[]>(this.apiUrl);
  }
}
