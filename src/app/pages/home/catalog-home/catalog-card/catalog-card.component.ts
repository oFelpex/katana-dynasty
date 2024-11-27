import { CurrencyPipe } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { CartService } from '../../../../services/cart-service/cart-service';
import { BaseKatana } from '../../../../models/base-katanas';
import { CommunKatanas } from '../../../../models/commun-katanas';
import { LegendaryKatanas } from '../../../../models/legendary-katanas';
import { MagicKatanas } from '../../../../models/magic-katanas';
@Component({
  selector: 'app-catalog-card',
  standalone: true,
  imports: [MatButtonModule, MatIcon, MatCardModule, CurrencyPipe],
  templateUrl: './catalog-card.component.html',
  styleUrl: './catalog-card.component.scss',
})
export class CatalogCardComponent {
  @Input()
  newlyAddedKatana!: { KatanaCategory: BaseKatana };

  constructor(public cartService: CartService) {}

  handleButtonClick() {
    this.cartService.toggleCartDrawer();
    this.cartService.addItem(this.newlyAddedKatana.KatanaCategory);
    console.log(this.newlyAddedKatana);
  }
}
