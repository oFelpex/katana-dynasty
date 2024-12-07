import { inject, Injectable } from '@angular/core';
import { Users } from '../../models/users';
import { UserService } from '../user-service/user.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userService: UserService;
  constructor() {
    this.userService = inject(UserService);
  }

  isAuthenticated(): boolean {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser') || 'null');
    return loggedUser != null;
  }

  loginUser(email: string, password: string): Observable<boolean> {
    return this.userService.getUserByEmail(email).pipe(
      map((user) => {
        if (user?.password === password) {
          localStorage.setItem('loggedUser', JSON.stringify(user));
          return true;
        }
        return false;
      })
    );
  }

  logoutUser() {
    localStorage.removeItem('loggedUser');
  }
}
