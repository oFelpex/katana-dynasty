import { Component, inject, OnInit } from '@angular/core';
import { NavBarComponent } from '../../../shared/nav-bar/nav-bar.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { MagicKatanas } from '../../../models/magic-katanas';
import { MagicKatanasService } from '../../../services/magic-katanas/magic-katanas.service';
import { CatalogCardComponent } from '../../../shared/catalog-card/catalog-card.component';

@Component({
  selector: 'app-magic',
  standalone: true,
  imports: [
    NavBarComponent,
    CatalogCardComponent,
    CommonModule,
    FooterComponent,
  ],
  templateUrl: './magic.component.html',
  styleUrls: ['./magic.component.scss'],
})
export class MagicComponent implements OnInit {
  magicKatanas: MagicKatanas[] = [];
  private magicKatanasService: MagicKatanasService;

  loading = true;

  constructor() {
    this.magicKatanasService = inject(MagicKatanasService);
  }

  ngOnInit(): void {
    this.magicKatanasService.getMagicKatanasFromAPI().subscribe({
      next: (katanas) => {
        this.magicKatanas = katanas;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error when searching for katanas on the API: ', err);
        this.loading = false;
      },
    });
  }
}
