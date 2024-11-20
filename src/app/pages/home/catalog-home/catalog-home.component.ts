import { Component } from '@angular/core';
import { CatalogCardComponent } from './catalog-card/catalog-card.component';
import { CommunKatanas } from '../../../models/commun-katanas';
import { LegendaryKatanas } from '../../../models/legendary-katanas';
import { MagicKatanas } from '../../../models/magic-katanas';

@Component({
  selector: 'app-catalog-home',
  standalone: true,
  imports: [CatalogCardComponent],
  templateUrl: './catalog-home.component.html',
  styleUrl: './catalog-home.component.scss',
})
export class CatalogHomeComponent {
  newlyAddedKatanas: CommunKatanas[] | LegendaryKatanas[] | MagicKatanas[] = [
    {
      id: 0,
      imgSRC:
        '../../../../assets/images/products/katanas/communKatanas/Great Katana.webp',
      imgALT: 'A Great Katana',
      title: 'Great Katana',
      description: `Large katana with a long, heavy blade. A weapon unique to warriors of the Land of Reeds. Designed for aggression, this armament requires the wielder to throw their entire body into swinging it. The slashing attacks of its honed edge incite blood loss.`,
      price: 1200,
    },
    {
      id: 1,
      imgSRC:
        '../../../../assets/images/products/katanas/communKatanas/Nagakiba.webp',
      imgALT: 'A Long Katana',
      title: 'Nagakiba',
      description: `Katana with a ferociously long blade. Signature weapon of Yura, hunter of Bloody Fingers. Reminiscent of a reinforced spear, its imposing length can be put to good use with powerful thrusting attacks.`,
      price: 1700,
    },
    {
      id: 2,
      imgSRC:
        '../../../../assets/images/products/katanas/communKatanas/Wado Ichimonji.webp',
      imgALT: 'Wado Ichimonji',
      title: 'Wado Ichimonji',
      description: `The Wado Ichimonji is a sword of great personal importance to Roronoa Zoro. It was forged by Shimotsuki Kouzaburou and was once a prized heirloom of his family. It is also one of the 21 Great Grade swords. After the death of its previous owner, Kuina, Zoro asked for it from her father, who then gave the sword to him.`,
      price: 950,
    },
  ];
}
