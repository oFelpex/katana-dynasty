import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Users } from '../../models/users';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http: HttpClient;
  users: Users[] = [];

  constructor() {
    this.http = inject(HttpClient);
  }

  getUsersByEmail(email: string) {
    return this.http
      .get<Users[]>('http://localhost:3000/users')
      .pipe(
        map((usersArray: Users[]) =>
          usersArray.find((user) => user.email === email)
        )
      );
  }
}
