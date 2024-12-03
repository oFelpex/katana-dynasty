import { inject, Injectable } from '@angular/core';
import { Users } from '../../models/users';
import { UserService } from '../user-service/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userService: UserService;

  constructor() {
    this.userService = inject(UserService);
  }

  loginUser(email: string, password: string) {
    if (email === 'admin@admin.com' && password === 'admin123') return true;
    return false;
  }
}
