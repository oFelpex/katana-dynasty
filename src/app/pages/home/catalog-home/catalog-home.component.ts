import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogCardComponent } from './catalog-card/catalog-card.component';
import { CommunKatanas } from '../../../models/commun-katanas';
import { LegendaryKatanas } from '../../../models/legendary-katanas';
import { MagicKatanas } from '../../../models/magic-katanas';
import { CommunKatanasService } from '../../../services/commun-katanas/commun-katanas.service';
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
  styleUrl: './catalog-home.component.scss',
})
export class CatalogHomeComponent implements OnInit {
  communKatanas: CommunKatanas[] = [];
  legendaryKatanas: LegendaryKatanas[] = [];
  magicKatanas: MagicKatanas[] = [];
  newlyAddedKatanas: BaseKatana[] = [];

  constructor(
    private communKatanasService: CommunKatanasService,
    private legendaryKatanasService: LegendaryKatanasService,
    private magicKatanasService: MagicKatanasService
  ) {}

  ngOnInit(): void {
    this.communKatanas = this.communKatanasService.getCommunKatanas();
    this.legendaryKatanas = this.legendaryKatanasService.getLegendaryKatanas();
    this.magicKatanas = this.magicKatanasService.getMagicKatanas();

    if (this.communKatanas.length > 0) {
      this.newlyAddedKatanas.push(this.communKatanas[0]);
    }
    if (this.legendaryKatanas.length > 0) {
      this.newlyAddedKatanas.push(this.legendaryKatanas[0]);
    }
    if (this.magicKatanas.length > 0) {
      this.newlyAddedKatanas.push(this.magicKatanas[0]);
    }
  }
}
