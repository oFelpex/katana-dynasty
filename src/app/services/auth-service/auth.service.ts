import { inject, Injectable } from '@angular/core';
import { Users } from '../../models/users';
import { UserService } from '../user-service/user.service';
import {
  filter,
  first,
  interval,
  map,
  Observable,
  switchMap,
  take,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userService: UserService;
  private http: HttpClient;
  private snackBar: MatSnackBar;
  private router: Router;

  constructor() {
    this.userService = inject(UserService);
    this.http = inject(HttpClient);
    this.snackBar = inject(MatSnackBar);
    this.router = inject(Router);
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
          this.snackBar.open(`Welcome, ${user.username}`, 'Close', {
            duration: 3000,
          });
          return true;
        }
        return false;
      })
    );
  }

  logoutUser() {
    localStorage.removeItem('loggedUser');
  }

  hasThisUserByEmail(email: string): Observable<boolean> {
    return this.userService.getUserByEmail(email).pipe(map((user) => !!user));
  }

  registerNewUser(newUser: Users) {
    this.hasThisUserByEmail(newUser.email).subscribe((exists) => {
      if (exists) {
        this.snackBar.open(`User already exists!`, 'Close', {
          duration: 3000,
        });
        return;
      }

      this.http.post('http://localhost:3000/users', newUser).subscribe(() => {
        this.snackBar.open(`Registered with success!`, 'Close', {
          duration: 3000,
        });

        interval(1000)
          .pipe(
            take(5),
            switchMap(() => this.loginUser(newUser.email, newUser.password)),
            filter((isLoggedIn) => isLoggedIn)
          )
          .subscribe({
            next: () => this.router.navigate(['home']),
            error: (err) =>
              this.snackBar.open(
                `Something is not right, please try to contact Felpex. Error: ${err}`,
                'Close'
              ),
          });
      });
    });
  }
}
