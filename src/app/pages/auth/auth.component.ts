import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';

import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth-service/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    NavBarComponent,
    FooterComponent,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit {
  public loginAuthForm: FormGroup;
  public registerAuthForm: FormGroup;
  public authService: AuthService;
  private snackBar: MatSnackBar;
  private router: Router;
  public loginOrRegisterScreen: Boolean = true;

  constructor() {
    this.snackBar = inject(MatSnackBar);
    this.router = inject(Router);
    this.authService = inject(AuthService);

    this.loginAuthForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });

    this.registerAuthForm = new FormGroup({
      registerUsername: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      registerEmail: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      registerPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  ngOnInit(): void {
    if (this.authService.isAuthenticated())
      this.router.navigate(['add-katana']);
  }

  changeScreen(): void {
    this.loginOrRegisterScreen = !this.loginOrRegisterScreen;
  }

  submitLoginForm(): void {
    this.authService
      .loginUser(
        this.loginAuthForm.get('email')?.value,
        this.loginAuthForm.get('password')?.value
      )
      .subscribe((isLoggedIn) => {
        if (!isLoggedIn) {
          this.snackBar.open(
            'Não foi possível logar. Tente novamente com credenciais válidas!',
            'Close',
            {
              horizontalPosition: 'end',
              verticalPosition: 'top',
              duration: 5000,
            }
          );
          return;
        }

        this.router.navigate(['add-katana']);
      });
  }

  submitRegisterForm(): void {}
}
