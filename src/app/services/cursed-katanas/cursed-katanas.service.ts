import { Injectable } from '@angular/core';
import { CursedKatanas } from '../../models/cursed-katanas';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursedKatanasService {
  private apiUrl = 'http://localhost:3000/cursed-katanas';

  constructor(private http: HttpClient) {}

  getCursedKatanas(): Observable<CursedKatanas[]> {
    return this.http.get<CursedKatanas[]>(this.apiUrl);
  }
}
