import { Component } from '@angular/core';
import { NavBarComponent } from '../../../shared/nav-bar/nav-bar.component';
import { FooterComponent } from '../../../shared/footer/footer.component';

@Component({
  selector: 'app-legendary',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './legendary.component.html',
  styleUrls: ['./legendary.component.scss'],
})
export class LegendaryComponent {}
