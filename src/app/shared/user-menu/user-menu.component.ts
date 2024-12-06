import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, Output, ViewChild } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart-service/cart-service';
import { WishListService } from '../../services/wish-list-service/wish-list.service';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [
    RouterModule,
    MatSidenavModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatMenuModule,
    MatDividerModule,
  ],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss',
})
export class UserMenuComponent {
  public cartService: CartService;
  public wishListService: WishListService;
  @ViewChild('userSideNav') userSideNav!: MatDrawer;

  toggleSidenav() {
    this.userSideNav.toggle();

    if (this.cartService.drawerIsOpen) {
      this.cartService.toggleCartDrawer();
    }
  }
  toggleCartDrawer() {
    this.userSideNav.toggle();
    this.cartService.toggleCartDrawer();
  }

  changePointersEvents() {
    if (this.userSideNav.opened) {
      (
        document.getElementById('user-drawer') as HTMLElement
      ).style.pointerEvents = 'all';
    } else if (!this.userSideNav.opened) {
      (
        document.getElementById('user-drawer') as HTMLElement
      ).style.pointerEvents = 'none';
    }
    console.log(this.userSideNav.opened);
  }

  constructor() {
    this.cartService = inject(CartService);
    this.wishListService = inject(WishListService);
  }
}
