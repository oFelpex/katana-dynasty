import {
  Component,
  computed,
  inject,
  Input,
  OnInit,
  Signal,
} from '@angular/core';
import { CommonKatanas } from '../../models/common-katanas';
import { CursedKatanas } from '../../models/cursed-katanas';
import { LegendaryKatanas } from '../../models/legendary-katanas';
import { MagicKatanas } from '../../models/magic-katanas';
import { Katanas } from '../../models/katanas';
import { CommonModule, CurrencyPipe, TitleCasePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { CartService } from '../../services/cart-service/cart-service';
@Component({
  selector: 'app-latest-katana',
  standalone: true,
  imports: [
    CommonModule,
    TitleCasePipe,
    CurrencyPipe,
    MatDividerModule,
    MatButtonModule,
  ],
  templateUrl: './latest-katana.component.html',
  styleUrl: './latest-katana.component.scss',
})
export class LatestKatanaComponent implements OnInit {
  @Input()
  lastAddedKatana: Katanas = {
    katanaCategory: {
      id: 5,
      class: 'common',
      imgSRC:
        'https://raw.githubusercontent.com/oFelpex/katana-dynasty-assets/c189767804c66389d3cf501c20bbb65d177c2dfe/assets/products/katanas/communKatanas/Wado%20Ichimonji.webp',
      imgALT: 'Wado Ichimonji',
      title: 'Wado Ichimonji',
      description:
        'The Wado Ichimonji is a sword of great personal importance to Roronoa Zoro. It was forged by Shimotsuki Kouzaburou and was once a prized heirloom of his family. It is also one of the 21 Great Grade swords. After the death of its previous owner, Kuina, Zoro asked for it from her father, who then gave the sword to him.',
      price: 1950,
      stock: 10,
    },
  };

  cartService: CartService;

  constructor() {
    this.cartService = inject(CartService);
  }

  isButtonDisabled!: Signal<boolean>;
  ngOnInit(): void {
    this.isButtonDisabled = computed(() =>
      this.cartService.disableButton(
        this.lastAddedKatana.katanaCategory.id,
        this.lastAddedKatana.katanaCategory
      )
    );
  }

  handleButtonClick(): void {
    this.cartService.toggleCartDrawer();
    this.cartService.addItem(this.lastAddedKatana.katanaCategory);
  }

  isCommonKatana(katana: any): katana is CommonKatanas {
    return katana.class === 'common';
  }

  isLegendaryKatana(katana: any): katana is LegendaryKatanas {
    return katana.class === 'legendary';
  }

  isMagicKatana(katana: any): katana is MagicKatanas {
    return katana.class === 'magic';
  }

  isCursedKatana(katana: any): katana is CursedKatanas {
    return katana.class === 'cursed';
  }
}
