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

  getTotalQuantityCartItems(): number {
    let quantityCartItems: number = 0;
    if (this.items.length > 0) {
      for (let i = 0; i < this.items.length; i++) {
        quantityCartItems += this.items[i].quantity;
      }
    }
    return quantityCartItems;
  }

  addItem(item: BaseKatana): void {
    const existingItem = this.items.find(
      (index) => index.id === item.id && item.class === index.class
    );
    if (existingItem) existingItem.quantity += 1;
    else this.items.push({ ...item, quantity: 1 });
  }

  removeItem(item: BaseKatana): void {
    const index = this.items.findIndex(
      (i) => i.id === item.id && i.class === item.class
    );

    if (index !== -1) {
      this.items[index].quantity--;

      if (this.items[index].quantity <= 0) {
        this.items = [
          ...this.items.slice(0, index),
          ...this.items.slice(index + 1),
        ];
      }
    }
    console.log(this.items);
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

  disableButton(id: number, katana: BaseKatana): boolean {
    const cartItems: CartItem[] = this.getCartItems();
    const cartItem: CartItem | undefined = cartItems.find(
      (item) => item.id === id && item.class === katana.class
    );
    if (cartItem) {
      return cartItem.quantity >= katana.stock;
    }
    return false;
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
