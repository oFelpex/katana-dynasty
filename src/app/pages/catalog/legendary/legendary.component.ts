import { Component, inject, OnInit } from '@angular/core';
import { NavBarComponent } from '../../../shared/nav-bar/nav-bar.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { LegendaryKatanas } from '../../../models/legendary-katanas';
import { LegendaryKatanasService } from '../../../services/legendary-katanas/legendary-katanas.service';
import { CatalogCardComponent } from '../../../shared/catalog-card/catalog-card.component';

@Component({
  selector: 'app-legendary',
  standalone: true,
  imports: [
    NavBarComponent,
    CatalogCardComponent,
    CommonModule,
    FooterComponent,
  ],
  templateUrl: './legendary.component.html',
  styleUrls: ['./legendary.component.scss'],
})
export class LegendaryComponent implements OnInit {
  legendaryKatanas: LegendaryKatanas[] = [];
  private magicKatanasService: LegendaryKatanasService;

  loading = true;

  constructor() {
    this.magicKatanasService = inject(LegendaryKatanasService);
  }

  ngOnInit(): void {
    this.magicKatanasService.getLegendaryKatanasFromAPI().subscribe({
      next: (katanas) => {
        this.legendaryKatanas = katanas;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error when searching for katanas on the API: ', err);
        this.loading = false;
      },
    });
  }
}
