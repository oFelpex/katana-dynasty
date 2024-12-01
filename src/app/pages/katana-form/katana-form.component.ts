import {
  Component,
  ChangeDetectionStrategy,
  signal,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';

import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-katana-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    NavBarComponent,
    FooterComponent,
    CommonModule,
  ],
  templateUrl: './katana-form.component.html',
  styleUrl: './katana-form.component.scss',
})
export class KatanaFormComponent {
  protected readonly value = signal('');

  protected onInput(event: MatSelectChange) {
    this.value.set(event.value);
  }

  public subscribe: FormGroup;
  private snackBar: MatSnackBar;

  constructor() {
    this.subscribe = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      imgSRC: new FormControl('', Validators.required),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      category: new FormControl('', Validators.required),
      stock: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
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

      if (this.subscribe.get('imgSRC')?.hasError('required')) {
        errors.push('Image Source is required');
      }

      if (this.subscribe.get('description')?.hasError('required')) {
        errors.push('Description is required');
      }
      if (this.subscribe.get('description')?.hasError('minlength')) {
        errors.push('Description must be at least 3 characters long');
      }

      if (this.subscribe.get('category')?.hasError('required')) {
        errors.push('Category is required');
      }

      if (this.subscribe.get('stock')?.hasError('required')) {
        errors.push('Stock is required');
      }

      if (this.subscribe.get('price')?.hasError('required')) {
        errors.push('Price is required');
      }

      this.snackBar.open(`Errors: ${errors.join('. ')}`, 'Close', {
        duration: 5000,
      });

      return;
    }

    this.snackBar.open('Subscribed with success!', 'Fechar');
    console.log(this.subscribe.value);
    this.subscribe.setValue({
      name: '',
      imgSRC: '',
      description: '',
      category: '',
      stock: '',
      price: '',
    });
  }
}
