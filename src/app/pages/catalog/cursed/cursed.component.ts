import { Component, inject, OnInit } from '@angular/core';
import { NavBarComponent } from '../../../shared/nav-bar/nav-bar.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { CursedKatanas } from '../../../models/cursed-katanas';
import { CursedKatanasService } from '../../../services/cursed-katanas/cursed-katanas.service';
import { CommonModule } from '@angular/common';
import { CatalogCardComponent } from '../../../shared/catalog-card/catalog-card.component';

@Component({
  selector: 'app-cursed',
  standalone: true,
  imports: [
    NavBarComponent,
    CatalogCardComponent,
    CommonModule,
    FooterComponent,
  ],
  templateUrl: './cursed.component.html',
  styleUrls: ['./cursed.component.scss'],
})
export class CursedComponent implements OnInit {
  cursedKatanas: CursedKatanas[] = [];
  private cursedKatanasService: CursedKatanasService;

  loading = true;

  constructor() {
    this.cursedKatanasService = inject(CursedKatanasService);
  }

  ngOnInit(): void {
    this.cursedKatanasService.getCursedKatanasFromAPI().subscribe({
      next: (katanas) => {
        this.cursedKatanas = katanas;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error when searching for katanas on the API: ', err);
        this.loading = false;
      },
    });
  }
}
