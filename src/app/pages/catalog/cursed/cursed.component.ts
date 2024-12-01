import { Component } from '@angular/core';
import { NavBarComponent } from '../../../shared/nav-bar/nav-bar.component';
import { FooterComponent } from '../../../shared/footer/footer.component';

@Component({
  selector: 'app-cursed',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './cursed.component.html',
  styleUrls: ['./cursed.component.scss'],
})
export class CursedComponent {}
