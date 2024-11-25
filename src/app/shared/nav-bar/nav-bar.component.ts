import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { CartMenuComponent } from '../cart-menu/cart-menu.component';
import { CartService } from '../../services/cart-service/cart-service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    CartMenuComponent,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  @Input() navBarStyles: {} = {};

  constructor(public cartService: CartService) {}
  addToCart(): void {
    this.cartService.toggleCartDrawer();
  }
}
