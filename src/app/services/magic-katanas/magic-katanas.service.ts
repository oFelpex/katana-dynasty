import { Injectable } from '@angular/core';
import { MagicKatanas } from '../../models/magic-katanas';
import { Observable } from 'rxjs';
import { LegendaryKatanas } from '../../models/legendary-katanas';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MagicKatanasService {
  private apiUrl = 'http://localhost:3000/magic-katanas';

  constructor(private http: HttpClient) {}

  getMagicKatanas(): Observable<MagicKatanas[]> {
    return this.http.get<MagicKatanas[]>(this.apiUrl);
  }
}
