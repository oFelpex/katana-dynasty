import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { CommunKatanas } from '../../models/commun-katanas';
import { CursedKatanas } from '../../models/cursed-katanas';
import { LegendaryKatanas } from '../../models/legendary-katanas';
import { MagicKatanas } from '../../models/magic-katanas';

export interface CartItem {
  katanaCategory:
    | CommunKatanas
    | CursedKatanas
    | LegendaryKatanas
    | MagicKatanas;
  id: number;
  quantity: number;
}
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: CartItem[] = [];

  getCartItems(): CartItem[] {
    return this.items;
  }

  addItem(item: CartItem): void {
    const existingItem = this.items.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.items.push(item);
    }
  }

  removeItem(itemId: number): void {
    this.items = this.items.filter((item) => item.id !== itemId);
  }

  clearCart(): void {
    this.items = [];
  }

  getTotal(): number {
    return this.items.reduce(
      (total, item) => total + item.katanaCategory.price * item.quantity,
      0
    );
  }

  private toggleCartSource = new Subject<void>();
  public isOpen: boolean = false;
  toggleCart$ = this.toggleCartSource.asObservable();

  toggleCartDrawer(): void {
    this.isOpen = !this.isOpen;
    this.toggleCartSource.next();
  }
}
