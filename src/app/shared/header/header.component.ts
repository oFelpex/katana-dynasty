import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CherryBlossomPetalsComponent } from './cherry-blossom-petals/cherry-blossom-petals.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavBarComponent, CherryBlossomPetalsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
