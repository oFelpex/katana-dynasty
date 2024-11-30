import { TitleCasePipe, CurrencyPipe, CommonModule } from '@angular/common';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

import { CartService } from '../../../../services/cart-service/cart-service';
import { BaseKatana } from '../../../../models/base-katanas';

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

  constructor(public cartService: CartService) {}

  handleButtonClick(): void {
    this.cartService.toggleCartDrawer();
    this.cartService.addItem(this.newlyAddedKatana);
  }
}
