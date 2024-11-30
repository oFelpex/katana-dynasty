import { Injectable } from '@angular/core';
import { LegendaryKatanas } from '../../models/legendary-katanas';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LegendaryKatanasService {
  private apiUrl = 'http://localhost:3000/legendary-katanas';

  constructor(private http: HttpClient) {}

  getLegendaryKatanas(): Observable<LegendaryKatanas[]> {
    return this.http.get<LegendaryKatanas[]>(this.apiUrl);
  }
}
