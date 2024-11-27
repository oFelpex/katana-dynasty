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
  newlyAddedKatanas: [
    {
      KatanaCategory: CommunKatanas | LegendaryKatanas | MagicKatanas;
    }
  ] = [
    {
      KatanaCategory: {
        id: -1,
        class: 'commun',
        imgSRC: '',
        imgALT: 'ERROR',
        title: 'ERROR',
        description: 'ERROR',
        price: 0,
      },
    },
  ];

  constructor(
    private communKatanasService: CommunKatanasService,
    private legendaryKatanasService: LegendaryKatanasService,
    private magicKatanasService: MagicKatanasService
  ) {}

  ngOnInit(): void {
    this.communKatanas = this.communKatanasService.getCommunKatanas();
    this.legendaryKatanas = this.legendaryKatanasService.getLegendaryKatanas();
    this.magicKatanas = this.magicKatanasService.getMagicKatanas();

    this.newlyAddedKatanas.push(
      { KatanaCategory: { ...this.communKatanas[0] } },
      { KatanaCategory: { ...this.magicKatanas[0] } },
      { KatanaCategory: { ...this.legendaryKatanas[1] } }
    );
    console.log(this.newlyAddedKatanas);
  }
}
