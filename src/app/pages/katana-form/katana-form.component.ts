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
  public subscribe: FormGroup;
  private snackBar: MatSnackBar;
  errors: string[] = [];

  constructor() {
    this.subscribe = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      imgSRC: new FormControl('', Validators.required),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      class: new FormControl('', Validators.required),
      stock: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(99),
      ]),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
    });

    this.snackBar = inject(MatSnackBar);
  }

  protected onInput(event: MatSelectChange) {
    this.value.set(event.value);

    this.value() === 'legendary'
      ? this.addLegendaryControls()
      : this.removeLegendaryControls();
  }

  private addLegendaryControls() {
    const controls = [
      'ancientSwordsman',
      'legend',
      'dormantPowerName',
      'dormantPowerDescription',
    ];

    controls.forEach((control) => {
      if (!this.subscribe.contains(control)) {
        this.subscribe.addControl(
          control,
          new FormControl('', [Validators.required, Validators.minLength(3)])
        );
      }
      this.subscribe.controls[control].updateValueAndValidity();
    });
  }

  private removeLegendaryControls() {
    const controls = [
      'ancientSwordsman',
      'legend',
      'dormantPowerName',
      'dormantPowerDescription',
    ];

    controls.forEach((control) => {
      this.subscribe.removeControl(control);
    });

    this.errors = [];
  }

  private generateErrors() {
    this.errors = [];

    Object.keys(this.subscribe.controls).forEach((controlName) => {
      const control = this.subscribe.get(controlName);

      if (control?.hasError('required')) {
        this.errors.push(`${controlName} is required`);
      }
      if (control?.hasError('minlength')) {
        this.errors.push(`${controlName} must be at least 3 characters long`);
      }
      if (control?.hasError('min') && controlName === 'stock') {
        this.errors.push(`enter the ${controlName} number beetwen 0-30`);
      }
      if (control?.hasError('min') && controlName === 'price') {
        this.errors.push(`enter the ${controlName} upper than 0`);
      }
      if (control?.hasError('minlength')) {
        this.errors.push(`enter the ${controlName} number beetwen 0-30`);
      }
    });
  }

  submitForm() {
    this.generateErrors();

    if (this.subscribe.invalid) {
      this.snackBar.open(`Errors: ${this.errors.join(', ')}`, 'Close', {
        duration: 5000,
      });
      return;
    }

    this.snackBar.open('Subscribed with success!', 'Close');
    console.log(this.subscribe.value);
    this.subscribe.reset();
    this.errors = [];
  }
}
