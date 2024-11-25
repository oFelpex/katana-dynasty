import { Component, HostListener, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

import { NavBarComponent } from '../../../shared/nav-bar/nav-bar.component';
import { CherryBlossomPetalsComponent } from './cherry-blossom-petals/cherry-blossom-petals.component';
import {
  BlossomSceneConfig,
  Petal,
} from './cherry-blossom-petals/cherry-blossom-petals.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NavBarComponent,
    CherryBlossomPetalsComponent,
    CommonModule,
    MatIconModule,
    MatSlideToggleModule,
    FormsModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  wallpaperNumber: number;
  wallpaperSRC: string;
  constructor() {
    this.wallpaperNumber = Number((Math.random() * 5).toFixed(0));
    this.wallpaperSRC = `../../../assets/images/backgrounds/background-${this.wallpaperNumber}.webp`;
  }

  navBarStyles: {} = {
    'border-color': '#fff',
    color: '#fff',
    'background-color': '#903749',
  };
  currentScrollY = 0;
  @HostListener('window:scroll')
  onScroll(): void {
    this.currentScrollY = window.scrollY || document.documentElement.scrollTop;
    this.isAtPositionY();
  }
  isAtPositionY(): void {
    const teste = document.querySelector(
      '.background-container'
    ) as HTMLDivElement;
    this.currentScrollY >= teste.offsetHeight - 30
      ? (this.navBarStyles = {
          'border-color': 'black',
          color: 'black',
          'background-color': '#fff',
        })
      : (this.navBarStyles = {
          'border-color': '#fff',
          color: '#fff',
          'background-color': '#903749',
        });
  }

  moveDown(): void {
    const target = document.getElementById('catalog-container');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      console.log(this.navBarStyles);
    }
  }

  petalsEnabled: boolean = false;
  blossomConfig: BlossomSceneConfig = {
    id: 'blossom-container',
    petalsTypes: [
      new Petal({ customClass: 'petal-style1' }),
      new Petal({ customClass: 'petal-style2' }),
      new Petal({ customClass: 'petal-style3' }),
      new Petal({ customClass: 'petal-style4' }),
    ],
    numPetals: Math.random() * (12 - 2) + 2,
    gravity: Math.random() * (0.5 - 0.2) + 0.2,
    windMaxSpeed: Math.random() * 5,
  };
}
