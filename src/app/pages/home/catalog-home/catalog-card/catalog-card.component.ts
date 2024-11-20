import { Component, Input, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-catalog-card',
  standalone: true,
  imports: [MatButtonModule, MatIcon, MatCardModule],
  templateUrl: './catalog-card.component.html',
  styleUrl: './catalog-card.component.scss',
})
export class CatalogCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imgSRC!: string;
  @Input() price!: number;
}
