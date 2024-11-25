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
  @Output() drawerOpen: boolean = true;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.subscription = this.cartService.toggleCart$.subscribe(() => {
      this.openCartDrawer();
    });

    setTimeout(() => {
      this.openCartDrawer();
    }, 0);
  }

  openCartDrawer(): void {
    this.drawer.toggle();
    this.drawerOpen = !this.drawerOpen;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
