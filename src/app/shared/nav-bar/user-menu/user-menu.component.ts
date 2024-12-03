import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, Output, ViewChild } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {
  MatDrawer,
  MatSidenav,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { CartService } from '../../../services/cart-service/cart-service';

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
  ],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss',
})
export class UserMenuComponent implements OnInit {
  public cartService: CartService;
  @ViewChild('userSideNav') userSideNav!: MatDrawer;

  toggleSidenav() {
    this.userSideNav.toggle();
  }
  toggleCartDrawer() {
    this.userSideNav.toggle();
    this.cartService.toggleCartDrawer();
  }

  ngOnInit(): void {
    (
      document.getElementById('user-container') as HTMLElement
    ).style.pointerEvents = 'none';
  }

  changePointersEvents() {
    if (this.userSideNav.opened) {
      (
        document.getElementById('user-container') as HTMLElement
      ).style.pointerEvents = 'all';
    } else if (!this.userSideNav.opened) {
      (
        document.getElementById('user-container') as HTMLElement
      ).style.pointerEvents = 'none';
    }
    console.log(this.userSideNav.opened);
  }

  constructor() {
    this.cartService = inject(CartService);
  }
}
