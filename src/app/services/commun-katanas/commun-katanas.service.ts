import { Injectable } from '@angular/core';
import { CommunKatanas } from '../../models/commun-katanas';

@Injectable({
  providedIn: 'root',
})
export class CommunKatanasService {
  private communKatanas: CommunKatanas[] = [
    {
      id: 0,
      class: 'commun',
      imgSRC:
        '../../../../assets/images/products/katanas/communKatanas/Great Katana.webp',
      imgALT: 'A Great Katana',
      title: 'Great Katana',
      description: `Large katana with a long, heavy blade. A weapon unique to warriors of the Land of Reeds. Designed for aggression, this armament requires the wielder to throw their entire body into swinging it. The slashing attacks of its honed edge incite blood loss.`,
      price: 2500,
    },
    {
      id: 1,
      class: 'commun',
      imgSRC:
        '../../../../assets/images/products/katanas/communKatanas/Nagakiba.webp',
      imgALT: 'A Long Katana',
      title: 'Nagakiba',
      description: `Katana with a ferociously long blade. Signature weapon of Yura, hunter of Bloody Fingers. Reminiscent of a reinforced spear, its imposing length can be put to good use with powerful thrusting attacks.`,
      price: 3700,
    },
    {
      id: 2,
      class: 'commun',
      imgSRC:
        '../../../../assets/images/products/katanas/communKatanas/Sandai Kitetsu.webp',
      imgALT: 'Sandai Kitetsu',
      title: 'Sandai Kitetsu',
      description: `Sandai Kitetsu is a moderately curved katana with a white edge and a distinct blue hamon that has the appearance of flames. Its tsuba is golden and shaped like a rounded cross pattée; the hilt is wrapped reddish-brown, with a golden clasp around its middle and a golden kashira pommel.`,
      price: 4880,
    },
    {
      id: 3,
      class: 'commun',
      imgSRC:
        '../../../../assets/images/products/katanas/communKatanas/Training Katana.webp',
      imgALT: 'Training Katana',
      title: 'Training Katana',
      description: `A wooden katana, perfect for training.`,
      price: 999,
    },
    {
      id: 4,
      class: 'commun',
      imgSRC:
        '../../../../assets/images/products/katanas/communKatanas/Uchigatana.webp',
      imgALT: 'Uchigatana',
      title: 'Uchigatana',
      description: `A katana with a long single-edged curved blade. A unique weapon wielded by the samurai from the Land of Reeds. The blade, with its undulating design, boasts extraordinary sharpness, and its slash attacks cause blood loss.`,
      price: 2400,
    },
    {
      id: 5,
      class: 'commun',
      imgSRC:
        '../../../../assets/images/products/katanas/communKatanas/Wado Ichimonji.webp',
      imgALT: 'Wado Ichimonji',
      title: 'Wado Ichimonji',
      description: `The Wado Ichimonji is a sword of great personal importance to Roronoa Zoro. It was forged by Shimotsuki Kouzaburou and was once a prized heirloom of his family. It is also one of the 21 Great Grade swords. After the death of its previous owner, Kuina, Zoro asked for it from her father, who then gave the sword to him.`,
      price: 1950,
    },
    {
      id: 6,
      class: 'commun',
      imgSRC:
        '../../../../assets/images/products/katanas/communKatanas/Yubashiri.webp',
      imgALT: 'Yubashiri',
      title: 'Yubashiri',
      description: `Yubashiri was one of the 50 Skillful Grade swords. Roronoa Zoro obtained this sword for free from Ipponmatsu. The sword was a family heirloom and the best sword in the shop in Loguetown.`,
      price: 1050,
    },
  ];

  getCommunKatanas(): CommunKatanas[] {
    return this.communKatanas;
  }
}
