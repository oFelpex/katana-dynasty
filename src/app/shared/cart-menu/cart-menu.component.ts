import { Component, OnInit, ViewChild, OnDestroy, Output } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart-service/cart-service';

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

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.subscription = this.cartService.toggleCart$.subscribe(() => {
      this.drawer.toggle();
    });

    setTimeout(() => {
      this.drawer.toggle();
    }, 0);
  }

  onDrawerClosed(): void {
    setTimeout(() => {
      this.cartService.toggleCartDrawer();
    }, 500);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
