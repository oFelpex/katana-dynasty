import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LegendaryKatanas } from '../../models/legendary-katanas';
@Injectable({
  providedIn: 'root',
})
export class LegendaryKatanasService {
  private apiUrl = 'http://localhost:3000/legendary-katanas';

  constructor(private http: HttpClient) {}

  getLegendaryKatanasFromAPI(): Observable<LegendaryKatanas[]> {
    return this.http.get<LegendaryKatanas[]>(this.apiUrl);
  }
}
