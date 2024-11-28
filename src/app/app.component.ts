import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartMenuComponent } from './shared/cart-menu/cart-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CartMenuComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'katana-dynasty';
}
