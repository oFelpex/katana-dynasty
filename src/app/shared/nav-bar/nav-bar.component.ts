import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

import { CartService } from '../../services/cart-service/cart-service';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  @Input() navBarStyles: {} = {
    'border-color': '#fff',
    color: '#fff',
    'background-color': '#903749',
  };

  constructor(public cartService: CartService) {}
  openTheCart(): void {
    this.cartService.toggleCartDrawer();
  }
}
