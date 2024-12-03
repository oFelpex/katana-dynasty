import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  Validators,
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
import { KatanasAPIService } from '../../services/katanas-api/katanas-api.service';
import { Router } from '@angular/router';

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
  public katanaForm: FormGroup;
  private snackBar: MatSnackBar;
  private katanaAPI: KatanasAPIService;
  private router: Router;
  errors: string[] = [];

  constructor() {
    this.katanaAPI = inject(KatanasAPIService);
    this.snackBar = inject(MatSnackBar);
    this.router = inject(Router);

    this.katanaForm = new FormGroup({
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
  }

  protected onInput(event: MatSelectChange) {
    this.value.set(event.value);

    this.value() === 'legendary'
      ? this.addLegendaryControls()
      : this.removeLegendaryControls();
    this.value() === 'magic'
      ? this.addMagicControls()
      : this.removeMagicControls();
    this.value() === 'cursed'
      ? this.addCursedControls()
      : this.removeCursedControls();
  }

  private addLegendaryControls() {
    const controls = [
      'ancientSwordsman',
      'legend',
      'dormantPowerName',
      'dormantPowerDescription',
    ];

    controls.forEach((control) => {
      if (!this.katanaForm.contains(control)) {
        this.katanaForm.addControl(
          control,
          new FormControl('', [Validators.required, Validators.minLength(3)])
        );
      }
      this.katanaForm.controls[control].updateValueAndValidity();
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
      this.katanaForm.removeControl(control);
    });

    this.errors = [];
  }

  private addMagicControls() {
    const controls = ['spellName', 'spellDescription'];

    controls.forEach((control) => {
      if (!this.katanaForm.contains(control)) {
        this.katanaForm.addControl(
          control,
          new FormControl('', [Validators.required, Validators.minLength(3)])
        );
      }
      this.katanaForm.controls[control].updateValueAndValidity();
    });
  }
  private removeMagicControls() {
    const controls = ['spellName', 'spellDescription'];

    controls.forEach((control) => {
      this.katanaForm.removeControl(control);
    });

    this.errors = [];
  }

  private addCursedControls() {
    const controls = ['curseTitle', 'curseDescription'];

    controls.forEach((control) => {
      if (!this.katanaForm.contains(control)) {
        this.katanaForm.addControl(
          control,
          new FormControl('', [Validators.required, Validators.minLength(3)])
        );
      }
      this.katanaForm.controls[control].updateValueAndValidity();
    });
  }
  private removeCursedControls() {
    const controls = ['curseTitle', 'curseDescription'];

    controls.forEach((control) => {
      this.katanaForm.removeControl(control);
    });

    this.errors = [];
  }

  private generateErrors() {
    this.errors = [];

    Object.keys(this.katanaForm.controls).forEach((controlName) => {
      const control = this.katanaForm.get(controlName);

      if (control?.hasError('required')) {
        this.errors.push(`${controlName} is required`);
      }
      if (control?.hasError('minlength')) {
        this.errors.push(`${controlName} must be at least 3 characters long`);
      }
      if (control?.hasError('min') && controlName === 'stock') {
        this.errors.push(`enter the ${controlName} number beetwen 0-99`);
      }
      if (control?.hasError('max') && controlName === 'stock') {
        this.errors.push(`enter the ${controlName} number beetwen 0-99`);
      }
      if (control?.hasError('min') && controlName === 'price') {
        this.errors.push(`enter the ${controlName} upper than 0`);
      }
    });
  }

  submitForm() {
    this.generateErrors();

    if (this.katanaForm.invalid) {
      this.snackBar.open(`Errors: ${this.errors.join(', ')}`, 'Close', {
        duration: 5000,
      });
      return;
    }

    this.snackBar.open('Subscribed with success!', 'Close');
    console.log(this.katanaForm.value);

    if (this.katanaForm.value.class === 'common') {
      this.katanaAPI.createCommonKatana(this.katanaForm.value).subscribe({
        next: () => {
          this.snackBar.open('Common Katana added with success!', 'Close', {
            duration: 5000,
          });
          this.router.navigate(['common']);
        },
        error: () => {
          this.snackBar.open(
            "Error, we can't add this katana. Contact support for more information!",
            'Close'
          );
        },
      });
    } else if (this.katanaForm.value.class === 'legendary') {
      this.katanaAPI.createLegendaryKatana(this.katanaForm.value).subscribe({
        next: () => {
          this.snackBar.open('Legendary Katana added with success!', 'Close');
          this.router.navigate(['legendary']);
        },
        error: () => {
          this.snackBar.open(
            "Error, we can't add this katana. Contact support for more information!",
            'Close'
          );
        },
      });
    } else if (this.katanaForm.value.class === 'magic') {
      this.katanaAPI.createMagicKatana(this.katanaForm.value).subscribe({
        next: () => {
          this.snackBar.open('Magic Katana added with success!', 'Close', {
            duration: 5000,
          });
          this.router.navigate(['magic']);
        },
        error: () => {
          this.snackBar.open(
            "Error, we can't add this katana. Contact support for more information!",
            'Close'
          );
        },
      });
    } else if (this.katanaForm.value.class === 'cursed') {
      this.katanaAPI.createCursedKatana(this.katanaForm.value).subscribe({
        next: () => {
          this.snackBar.open('Cursed Katana added with success!', 'Close', {
            duration: 5000,
          });
          this.router.navigate(['cursed']);
        },
        error: () => {
          this.snackBar.open(
            "Error, we can't add this katana. Contact support for more information!",
            'Close'
          );
        },
      });
    }

    this.katanaForm.reset();
    this.errors = [];
  }
}
