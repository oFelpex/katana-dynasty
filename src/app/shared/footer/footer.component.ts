import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-footer',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    CommonModule,
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  moveToTop(): void {
    const target = document.querySelector('body') as HTMLBodyElement;
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  public subscribe: FormGroup;
  private snackBar: MatSnackBar;

  constructor() {
    this.subscribe = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z ]*'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });

    this.snackBar = inject(MatSnackBar);
  }

  submitForm() {
    if (this.subscribe.invalid) {
      const errors: string[] = [];

      if (this.subscribe.get('name')?.hasError('required')) {
        errors.push('Name is required');
      }
      if (this.subscribe.get('name')?.hasError('minlength')) {
        errors.push('Name must be at least 3 characters long');
      }
      if (this.subscribe.get('name')?.hasError('pattern')) {
        errors.push('Only letters are allowed in the name');
      }

      if (this.subscribe.get('email')?.hasError('required')) {
        errors.push('Email is required');
      }
      if (this.subscribe.get('email')?.hasError('email')) {
        errors.push('Invalid email address');
      }

      this.snackBar.open(`Errors: ${errors.join(', ')}`, 'Close', {
        duration: 5000,
      });

      return;
    }

    this.snackBar.open('Subscribed with success!', 'Fechar');
    this.subscribe.setValue({ name: '', email: '' });
  }
}
