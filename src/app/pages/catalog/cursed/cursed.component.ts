import { Component, inject, OnInit } from '@angular/core';
import { NavBarComponent } from '../../../shared/nav-bar/nav-bar.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { CursedKatanas } from '../../../models/cursed-katanas';
import { CursedKatanasService } from '../../../services/cursed-katanas/cursed-katanas.service';
import { CommonModule } from '@angular/common';
import { CatalogCardComponent } from '../../../shared/catalog-card/catalog-card.component';
import { LatestKatanaComponent } from '../../../shared/latest-katana/latest-katana.component';
import { Katanas } from '../../../models/katanas';

@Component({
  selector: 'app-cursed',
  standalone: true,
  imports: [
    NavBarComponent,
    CatalogCardComponent,
    CommonModule,
    FooterComponent,
    LatestKatanaComponent,
  ],
  templateUrl: './cursed.component.html',
  styleUrls: ['./cursed.component.scss'],
})
export class CursedComponent implements OnInit {
  public cursedKatanas: CursedKatanas[] = [];
  private cursedKatanasService: CursedKatanasService;
  public lastAddedKatana: Katanas = {
    katanaCategory: this.cursedKatanas[
      this.cursedKatanas.length - 1
    ] as CursedKatanas,
  };

  loading = true;

  constructor() {
    this.cursedKatanasService = inject(CursedKatanasService);
  }

  ngOnInit(): void {
    this.cursedKatanasService.getCursedKatanasFromAPI().subscribe({
      next: (katanas) => {
        this.cursedKatanas = katanas;
        this.loading = false;

        this.lastAddedKatana = {
          katanaCategory: this.cursedKatanas[this.cursedKatanas.length - 1],
        };
      },
      error: (err) => {
        console.error('Error when searching for katanas on the API: ', err);
        this.loading = false;
      },
    });
  }
}
