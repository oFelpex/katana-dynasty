import { Component } from '@angular/core';
import { CatalogCardComponent } from './catalog-card/catalog-card.component';

@Component({
  selector: 'app-catalog-home',
  standalone: true,
  imports: [CatalogCardComponent],
  templateUrl: './catalog-home.component.html',
  styleUrl: './catalog-home.component.scss',
})
export class CatalogHomeComponent {}
