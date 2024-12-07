import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CommonKatanas } from '../../models/common-katanas';
@Injectable({
  providedIn: 'root',
})
export class CommonKatanasService {
  private apiUrl = 'https://katana-dynasty.vercel.app/api/common-katanas';

  constructor(private http: HttpClient) {}

  getCommonKatanasFromAPI(): Observable<CommonKatanas[]> {
    return this.http.get<CommonKatanas[]>(this.apiUrl);
  }
}
