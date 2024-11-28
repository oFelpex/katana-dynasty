import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { Subscription } from 'rxjs';

import {
  CartItem,
  CartService,
} from '../../services/cart-service/cart-service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-menu',
  standalone: true,
  imports: [
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatDividerModule,
    CurrencyPipe,
  ],
  templateUrl: './cart-menu.component.html',
  styleUrls: ['./cart-menu.component.scss'],
})
export class CartMenuComponent implements OnInit, OnDestroy {
  @ViewChild('drawer') drawer!: MatDrawer;
  private subscription!: Subscription;

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.subscription = this.cartService.toggleCart$.subscribe(() => {
      this.drawer.toggle();

      this.changePointersEvents();
    });
  }

  changePointersEvents() {
    this.cartService.drawerBoolean = this.drawer.opened;
    if (this.drawer.opened) {
      (
        document.getElementById('cart-menu-container') as HTMLElement
      ).style.pointerEvents = 'all';
    } else {
      (
        document.getElementById('cart-menu-container') as HTMLElement
      ).style.pointerEvents = 'none';
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
