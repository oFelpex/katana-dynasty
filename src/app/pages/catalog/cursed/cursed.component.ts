import { Component } from '@angular/core';
import { NavBarComponent } from '../../../shared/nav-bar/nav-bar.component';

@Component({
  selector: 'app-cursed',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './cursed.component.html',
  styleUrls: ['./cursed.component.scss'],
})
export class CursedComponent {}
