import { Component } from '@angular/core';
import { NavBarComponent } from '../../../shared/nav-bar/nav-bar.component';

@Component({
  selector: 'app-legendary',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './legendary.component.html',
  styleUrls: ['./legendary.component.scss'],
})
export class LegendaryComponent {}
