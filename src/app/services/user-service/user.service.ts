import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Users } from '../../models/users';
import { map, Observable, tap } from 'rxjs';
import { AuthService } from '../auth-service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http: HttpClient;
  usersArray: Users[] = [];

  constructor() {
    this.http = inject(HttpClient);
  }

  getUserByEmail(email: string) {
    return this.http
      .get<Users[]>('http://localhost:3000/users')
      .pipe(
        map((usersArray) =>
          usersArray.find(
            (user) =>
              user.email.toLowerCase().trim() === email.toLowerCase().trim()
          )
        )
      );
  }

  getUsernameLogged() {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser') || 'null');
    if (loggedUser) {
      return loggedUser.username;
    } else {
      return 'Guest';
    }
  }
}
