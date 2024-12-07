import { Component, inject, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';

import { CartService } from '../../services/cart-service/cart-service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { UserMenuComponent } from '../user-menu/user-menu.component';
import { AuthService } from '../../services/auth-service/auth.service';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterModule,
    MatSidenavModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatMenuModule,
    UserMenuComponent,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  public cartService: CartService;
  public authService: AuthService;
  public router: Router;
  private breakpointObserver: BreakpointObserver;

  @Input() navBarStyles: {} = {
    'border-color': '#fff',
    color: '#fff',
    'background-color': '#903749',
  };
  @ViewChild(UserMenuComponent) userMenuComponent!: UserMenuComponent;

  toggleChildSidenav() {
    this.userMenuComponent.toggleSidenav();
    this.userMenuComponent.changePointersEvents();
  }

  constructor() {
    this.cartService = inject(CartService);
    this.breakpointObserver = inject(BreakpointObserver);
    this.authService = inject(AuthService);
    this.router = inject(Router);
  }

  openTheCart(): void {
    this.cartService.toggleCartDrawer();
  }

  isMobileScreen: boolean = false;
  private breakpointSubscription!: Subscription;

  ngOnInit(): void {
    this.breakpointSubscription = this.breakpointObserver
      .observe('(max-width: 720px)')
      .subscribe((state: BreakpointState) => {
        this.isMobileScreen = state.matches;
      });
  }

  ngOnDestroy(): void {
    if (this.breakpointSubscription) {
      this.breakpointSubscription.unsubscribe();
    }
  }
}
