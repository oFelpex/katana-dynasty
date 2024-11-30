import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { MagicKatanas } from '../../models/magic-katanas';
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
