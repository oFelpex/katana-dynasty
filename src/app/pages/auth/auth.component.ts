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
export class AuthComponent {
  public authForm: FormGroup;
  private snackBar: MatSnackBar;
  public authService: AuthService;
  private router: Router;

  constructor() {
    this.snackBar = inject(MatSnackBar);
    this.router = inject(Router);
    this.authService = inject(AuthService);

    this.authForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  submitForm() {
    const loggedIn = this.authService.loginUser(
      this.authForm.get('email')?.value,
      this.authForm.get('password')?.value
    );

    if (!loggedIn) {
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
  }
}
