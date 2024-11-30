import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogCardComponent } from './catalog-card/catalog-card.component';
import { CommunKatanas } from '../../../models/commun-katanas';
import { LegendaryKatanas } from '../../../models/legendary-katanas';
import { MagicKatanas } from '../../../models/magic-katanas';
import { CommunKatanasService } from '../../../services/common-katanas/common-katanas.service';
import { LegendaryKatanasService } from '../../../services/legendary-katanas/legendary-katanas.service';
import { MagicKatanasService } from '../../../services/magic-katanas/magic-katanas.service';
import { BaseKatana } from '../../../models/base-katanas';
import { CursedKatanasService } from '../../../services/cursed-katanas/cursed-katanas.service';
import { CursedKatanas } from '../../../models/cursed-katanas';

@Component({
  selector: 'app-catalog-home',
  standalone: true,
  imports: [CatalogCardComponent, CommonModule],
  templateUrl: './catalog-home.component.html',
  styleUrls: ['./catalog-home.component.scss'],
})
export class CatalogHomeComponent implements OnInit {
  communKatanas: CommunKatanas[] = [];
  legendaryKatanas: LegendaryKatanas[] = [];
  magicKatanas: MagicKatanas[] = [];
  newlyAddedKatanas: BaseKatana[] = [];
  loading = true;

  constructor(
    private communKatanasService: CommunKatanasService,
    private legendaryKatanasService: LegendaryKatanasService,
    private magicKatanasService: MagicKatanasService
  ) {}

  ngOnInit(): void {
    this.communKatanasService.getCommunKatanasFromAPI().subscribe({
      next: (katanas) => {
        this.communKatanas = katanas;
        this.loading = false;

        if (this.communKatanas.length > 0) {
          this.newlyAddedKatanas.push(this.communKatanas[0]);
        }
      },
      error: (err) => {
        console.error('Error when searching for katanas on the API: ', err);
        this.loading = false;
      },
    });

    this.legendaryKatanasService.getLegendaryKatanas().subscribe({
      next: (katanas) => {
        this.legendaryKatanas = katanas;
        this.loading = false;

        if (this.legendaryKatanas.length > 0) {
          this.newlyAddedKatanas.push(this.legendaryKatanas[0]);
        }
      },
      error: (err) => {
        console.error('Error when searching for katanas on the API: ', err);
        this.loading = false;
      },
    });

    this.magicKatanasService.getMagicKatanas().subscribe({
      next: (katanas) => {
        this.magicKatanas = katanas;
        this.loading = false;

        if (this.magicKatanas.length > 0) {
          this.newlyAddedKatanas.push(this.magicKatanas[0]);
        }
      },
      error: (err) => {
        console.error('Error when searching for katanas on the API: ', err);
        this.loading = false;
      },
    });
  }
}
