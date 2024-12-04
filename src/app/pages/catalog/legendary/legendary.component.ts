import { Component, inject, OnInit } from '@angular/core';
import { NavBarComponent } from '../../../shared/nav-bar/nav-bar.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { LegendaryKatanas } from '../../../models/legendary-katanas';
import { LegendaryKatanasService } from '../../../services/legendary-katanas/legendary-katanas.service';
import { CatalogCardComponent } from '../../../shared/catalog-card/catalog-card.component';
import { Katanas } from '../../../models/katanas';
import { LatestKatanaComponent } from '../../../shared/latest-katana/latest-katana.component';

@Component({
  selector: 'app-legendary',
  standalone: true,
  imports: [
    NavBarComponent,
    CatalogCardComponent,
    CommonModule,
    FooterComponent,
    LatestKatanaComponent,
  ],
  templateUrl: './legendary.component.html',
  styleUrls: ['./legendary.component.scss'],
})
export class LegendaryComponent implements OnInit {
  public legendaryKatanas: LegendaryKatanas[] = [];
  public lastAddedKatana: Katanas = {
    katanaCategory: this.legendaryKatanas[
      this.legendaryKatanas.length - 1
    ] as LegendaryKatanas,
  };
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

        this.lastAddedKatana = {
          katanaCategory:
            this.legendaryKatanas[this.legendaryKatanas.length - 1],
        };
      },
      error: (err) => {
        console.error('Error when searching for katanas on the API: ', err);
        this.loading = false;
      },
    });
  }
}
