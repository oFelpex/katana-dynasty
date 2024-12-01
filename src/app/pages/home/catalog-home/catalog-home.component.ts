import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogCardComponent } from './catalog-card/catalog-card.component';
import { BaseKatana } from '../../../models/base-katanas';
import { CommonKatanas } from '../../../models/common-katanas';
import { LegendaryKatanas } from '../../../models/legendary-katanas';
import { MagicKatanas } from '../../../models/magic-katanas';
import { CommonKatanasService } from '../../../services/common-katanas/common-katanas.service';
import { LegendaryKatanasService } from '../../../services/legendary-katanas/legendary-katanas.service';
import { MagicKatanasService } from '../../../services/magic-katanas/magic-katanas.service';
@Component({
  selector: 'app-catalog-home',
  standalone: true,
  imports: [CatalogCardComponent, CommonModule],
  templateUrl: './catalog-home.component.html',
  styleUrls: ['./catalog-home.component.scss'],
})
export class CatalogHomeComponent implements OnInit {
  commonKatanas: CommonKatanas[] = [];
  legendaryKatanas: LegendaryKatanas[] = [];
  magicKatanas: MagicKatanas[] = [];
  newlyAddedKatanas: BaseKatana[] = [];
  loading = true;

  constructor(
    private commonKatanasService: CommonKatanasService,
    private legendaryKatanasService: LegendaryKatanasService,
    private magicKatanasService: MagicKatanasService
  ) {}

  ngOnInit(): void {
    this.commonKatanasService.getCommonKatanasFromAPI().subscribe({
      next: (katanas) => {
        this.commonKatanas = katanas;
        this.loading = false;

        if (this.commonKatanas.length > 0) {
          this.newlyAddedKatanas.push(
            this.commonKatanas[this.commonKatanas.length - 1]
          );
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
          this.newlyAddedKatanas.push(
            this.legendaryKatanas[this.legendaryKatanas.length - 1]
          );
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
          this.newlyAddedKatanas.push(
            this.magicKatanas[this.magicKatanas.length - 1]
          );
        }
      },
      error: (err) => {
        console.error('Error when searching for katanas on the API: ', err);
        this.loading = false;
      },
    });
  }
}
