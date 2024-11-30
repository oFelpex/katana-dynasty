import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommunKatanas } from '../../models/commun-katanas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunKatanasService {
  private apiUrl = 'http://localhost:3000/common-katanas';

  constructor(private http: HttpClient) {}

  getCommunKatanasFromAPI(): Observable<CommunKatanas[]> {
    return this.http.get<CommunKatanas[]>(this.apiUrl);
  }
}
