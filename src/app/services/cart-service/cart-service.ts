import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { BaseKatana } from '../../models/base-katanas';

export interface CartItem extends BaseKatana {
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

  addItem(item: BaseKatana): void {
    const existingItem = this.items.find((index) => index.id === item.id);
    if (existingItem) existingItem.quantity += 1;
    else this.items.push({ ...item, quantity: 1 });
  }

  //NEED TO SEE LATER
  removeItem(itemId: number): void {
    this.items = this.items.filter((item) => item.id !== itemId);
  }

  clearCart(): void {
    this.items = [];
  }

  getTotal(): number {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  private toggleCartSource = new Subject<void>();
  private isOpen: boolean = false;
  toggleCart$ = this.toggleCartSource.asObservable();

  toggleCartDrawer(): void {
    this.toggleCartSource.next();
  }
  get drawerIsOpen(): boolean {
    return this.isOpen;
  }
  set drawerBoolean(teste: boolean) {
    this.isOpen = teste;
  }
}
