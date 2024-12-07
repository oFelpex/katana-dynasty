import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../../services/cart-service/cart-service';
import { WishListService } from '../../services/wish-list-service/wish-list.service';
import { MatDividerModule } from '@angular/material/divider';
import { AuthService } from '../../services/auth-service/auth.service';
import { UserService } from '../../services/user-service/user.service';

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
  public userService: UserService;
  public authService: AuthService;
  private router: Router;
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

  makeLoginOrLogout() {
    if (this.authService.isAuthenticated()) {
      this.authService.logoutUser();
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['auth']);
    }
  }

  constructor() {
    this.cartService = inject(CartService);
    this.wishListService = inject(WishListService);
    this.userService = inject(UserService);
    this.authService = inject(AuthService);
    this.router = inject(Router);
  }
}
