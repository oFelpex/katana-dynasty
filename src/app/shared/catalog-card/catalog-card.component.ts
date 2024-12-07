import { TitleCasePipe, CurrencyPipe, CommonModule } from '@angular/common';
import {
  Component,
  Input,
  ChangeDetectionStrategy,
  computed,
  inject,
} from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

import { CartService } from '../../services/cart-service/cart-service';
import { BaseKatana } from '../../models/base-katanas';
import { WishListService } from '../../services/wish-list-service/wish-list.service';

@Component({
  selector: 'app-catalog-card',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIcon,
    MatCardModule,
    CommonModule,
    CurrencyPipe,
    TitleCasePipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './catalog-card.component.html',
  styleUrls: ['./catalog-card.component.scss'],
})
export class CatalogCardComponent {
  @Input()
  newlyAddedKatana!: BaseKatana;
  public cartService: CartService;
  public wishListService: WishListService;
  isButtonDisabled = computed(() =>
    this.cartService.disableButton(
      this.newlyAddedKatana.id,
      this.newlyAddedKatana
    )
  );

  constructor() {
    this.wishListService = inject(WishListService);
    this.cartService = inject(CartService);
  }

  addToWishListHandleButtonClick(): void {
    this.wishListService.addWishListItem(this.newlyAddedKatana);
  }

  addToCartHandleButtonClick(): void {
    this.cartService.addItem(this.newlyAddedKatana);
  }
}
