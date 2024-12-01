import { Injectable, signal, WritableSignal } from '@angular/core';
import { Subject } from 'rxjs';

import { BaseKatana } from '../../models/base-katanas';

export interface CartItem extends BaseKatana {
  quantity: number;
}
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private itemsSignal: WritableSignal<CartItem[]> = signal([]);

  getCartItems(): CartItem[] {
    return this.itemsSignal();
  }

  getTotalQuantityCartItems(): number {
    let quantityCartItems: number = 0;
    if (this.itemsSignal().length > 0) {
      for (let i = 0; i < this.itemsSignal().length; i++) {
        quantityCartItems += this.itemsSignal()[i].quantity;
      }
    }
    return quantityCartItems;
  }

  addItem(item: BaseKatana): void {
    const currentItems = this.itemsSignal();
    const existingItem = currentItems.find(
      (index) => index.id === item.id && item.class === index.class
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      currentItems.push({ ...item, quantity: 1 });
    }

    this.itemsSignal.set([...currentItems]);
  }

  removeItem(item: BaseKatana): void {
    const items = this.itemsSignal();
    const index = items.findIndex(
      (i) => i.id === item.id && i.class === item.class
    );

    if (index !== -1) {
      items[index].quantity--;

      if (items[index].quantity <= 0) {
        items.splice(index, 1);
      }

      this.itemsSignal.set([...items]);
    }
  }

  clearCart(): void {
    this.itemsSignal.set([]);
  }

  getTotal(): number {
    return this.itemsSignal().reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  disableButton(id: number, katana: BaseKatana): boolean {
    const cartItem = this.itemsSignal().find(
      (item) => item.id === id && item.class === katana.class
    );
    return cartItem ? cartItem.quantity >= katana.stock : false;
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
