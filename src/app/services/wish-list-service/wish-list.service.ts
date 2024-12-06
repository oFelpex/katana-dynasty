import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { BaseKatana } from '../../models/base-katanas';
import { CartService } from '../cart-service/cart-service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  private itemsSignal: WritableSignal<BaseKatana[]> = signal([]);
  private cartService: CartService;
  private snackBar: MatSnackBar;

  constructor() {
    this.cartService = inject(CartService);
    this.snackBar = inject(MatSnackBar);
  }

  getWishListItems(): BaseKatana[] {
    return this.itemsSignal();
  }

  addWishListItem(item: BaseKatana): void {
    const currentItems = this.itemsSignal();
    const existingItem = currentItems.find(
      (index) => index.id === item.id && item.class === index.class
    );

    if (existingItem) {
      this.removeWishListItem(item);
      this.snackBar.open(`${item.title} removed from wish list!`, 'Close', {
        duration: 3000,
      });
    } else {
      currentItems.push({ ...item });
      this.snackBar.open(`${item.title} added to wish list!`, 'Close', {
        duration: 3000,
      });
    }

    this.itemsSignal.set([...currentItems]);
  }

  removeWishListItem(item: BaseKatana): void {
    const items = this.itemsSignal();
    const index = items.findIndex(
      (i) => i.id === item.id && i.class === item.class
    );

    if (index !== -1) {
      items.splice(index, 1);

      this.itemsSignal.set([...items]);
    }
  }

  addWishListItemToCart(item: BaseKatana): void {
    this.cartService.addItem(item);
    this.removeWishListItem(item);
    this.snackBar.open(`Added to Cart!`, 'Close', {
      duration: 3000,
    });
  }

  addAllWishListToCart(items: BaseKatana[]): void {
    items.forEach((katana) => {
      this.cartService.addItem(katana);
    });
    this.clearWishList();
    this.snackBar.open(`Added all items to the cart!`, 'Close', {
      duration: 3000,
    });
  }

  clearWishList(): void {
    this.itemsSignal.set([]);
    this.snackBar.open(`Wish list cleared!`, 'Close', {
      duration: 3000,
    });
  }

  disableWishListButton(id: number, katana: BaseKatana): boolean {
    const cartItem = this.itemsSignal().find(
      (item) => item.id === id && item.class === katana.class
    );
    if (cartItem) return true;
    return false;
  }
}
