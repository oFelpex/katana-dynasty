import { Component } from '@angular/core';

import { FooterComponent } from '../../shared/footer/footer.component';
import { CatalogHomeComponent } from './catalog-home/catalog-home.component';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, CatalogHomeComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
