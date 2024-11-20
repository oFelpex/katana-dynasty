import { Injectable } from '@angular/core';
import { MagicKatanas } from '../../models/magic-katanas';

@Injectable({
  providedIn: 'root',
})
export class MagicKatanasService {
  private magicKatanas: MagicKatanas[] = [
    {
      id: 0,
      imgSRC: '../../../../assets/images/products/katanas/magicKatanas/.webp',
      imgALT: '',
      title: '',
      description: ``,
      price: 2150,
      creator: '',
      spells: '',
    },
    {
      id: 1,
      imgSRC: '../../../../assets/images/products/katanas/magicKatanas/.webp',
      imgALT: '',
      title: '',
      description: ``,
      price: 2150,
      creator: '',
      spells: '',
    },
    {
      id: 2,
      imgSRC: '../../../../assets/images/products/katanas/magicKatanas/.webp',
      imgALT: '',
      title: '',
      description: ``,
      price: 2150,
      creator: '',
      spells: '',
    },
    {
      id: 3,
      imgSRC: '../../../../assets/images/products/katanas/magicKatanas/.webp',
      imgALT: '',
      title: '',
      description: ``,
      price: 4150,
      creator: '',
      spells: '',
    },
    {
      id: 4,
      imgSRC: '../../../../assets/images/products/katanas/magicKatanas/.webp',
      imgALT: '',
      title: '',
      description: ``,
      price: 4050,
      creator: '',
      spells: '',
    },
  ];

  getCommunKatanas(): MagicKatanas[] {
    return this.magicKatanas;
  }
}
