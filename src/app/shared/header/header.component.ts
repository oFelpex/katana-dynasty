import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CherryBlossomPetalsComponent } from './cherry-blossom-petals/cherry-blossom-petals.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NavBarComponent,
    CherryBlossomPetalsComponent,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  wallpaperNumber: number;
  wallpaper: string;
  constructor() {
    this.wallpaperNumber = Number((Math.random() * 5).toFixed(0));
    this.wallpaper = `../../../assets/images/backgrounds/background-${this.wallpaperNumber}.webp`;
  }

  moveDown(): void {
    const target = document.getElementById('test');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
