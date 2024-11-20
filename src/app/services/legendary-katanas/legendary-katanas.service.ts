import { Injectable } from '@angular/core';
import { LegendaryKatanas } from '../../models/legendary-katanas';

@Injectable({
  providedIn: 'root',
})
export class LegendaryKatanasService {
  private legendaryKatanas: LegendaryKatanas[] = [
    {
      id: 0,
      imgSRC:
        '../../../../assets/images/products/katanas/legendaryKatanas/.webp',
      imgALT: '',
      title: '',
      description: ``,
      price: 2150,
      ancientSwordsman: '',
      legend: '',
      dormantPower: '',
    },
    {
      id: 1,
      imgSRC:
        '../../../../assets/images/products/katanas/legendaryKatanas/.webp',
      imgALT: '',
      title: '',
      description: ``,
      price: 2150,
      ancientSwordsman: '',
      legend: '',
      dormantPower: '',
    },
    {
      id: 2,
      imgSRC:
        '../../../../assets/images/products/katanas/legendaryKatanas/.webp',
      imgALT: '',
      title: '',
      description: ``,
      price: 2150,
      ancientSwordsman: '',
      legend: '',
      dormantPower: '',
    },
    {
      id: 3,
      imgSRC:
        '../../../../assets/images/products/katanas/legendaryKatanas/.webp',
      imgALT: '',
      title: '',
      description: ``,
      price: 2150,
      ancientSwordsman: '',
      legend: '',
      dormantPower: '',
    },
    {
      id: 4,
      imgSRC:
        '../../../../assets/images/products/katanas/legendaryKatanas/.webp',
      imgALT: '',
      title: '',
      description: ``,
      price: 2150,
      ancientSwordsman: '',
      legend: '',
      dormantPower: '',
    },
  ];

  getCommunKatanas(): LegendaryKatanas[] {
    return this.legendaryKatanas;
  }
}
