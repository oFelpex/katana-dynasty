import { Component, OnInit, ViewChild, OnDestroy, Output } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import {
  CartItem,
  CartService,
} from '../../services/cart-service/cart-service';

@Component({
  selector: 'app-cart-menu',
  standalone: true,
  imports: [
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
  ],
  templateUrl: './cart-menu.component.html',
  styleUrl: './cart-menu.component.scss',
})
export class CartMenuComponent implements OnInit, OnDestroy {
  @ViewChild('drawer') drawer!: MatDrawer;
  private subscription!: Subscription;
  public cartItens: CartItem[];

  constructor(public cartService: CartService) {
    this.cartItens = this.cartService.getCartItems();
  }

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
