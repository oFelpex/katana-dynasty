import { Component, inject, OnInit } from '@angular/core';
import { NavBarComponent } from '../../../shared/nav-bar/nav-bar.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { CommonKatanas } from '../../../models/common-katanas';
import { CommonKatanasService } from '../../../services/common-katanas/common-katanas.service';
import { CommonModule } from '@angular/common';
import { CatalogCardComponent } from '../../../shared/catalog-card/catalog-card.component';
import { LatestKatanaComponent } from '../../../shared/latest-katana/latest-katana.component';
import { Katanas } from '../../../models/katanas';

@Component({
  selector: 'app-commun',
  standalone: true,
  imports: [
    NavBarComponent,
    CommonModule,
    CatalogCardComponent,
    FooterComponent,
    LatestKatanaComponent,
  ],
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss'],
})
export class CommonComponent implements OnInit {
  public commonKatanas: CommonKatanas[] = [];
  public lastAddedKatana: Katanas = {
    katanaCategory: this.commonKatanas[
      this.commonKatanas.length - 1
    ] as CommonKatanas,
  };
  private commonKatanasService: CommonKatanasService;

  loading = true;

  constructor() {
    this.commonKatanasService = inject(CommonKatanasService);
  }

  ngOnInit(): void {
    this.commonKatanasService.getCommonKatanasFromAPI().subscribe({
      next: (katanas) => {
        this.commonKatanas = katanas;
        this.loading = false;

        this.lastAddedKatana = {
          katanaCategory: this.commonKatanas[this.commonKatanas.length - 1],
        };
      },
      error: (err) => {
        console.error('Error when searching for katanas on the API: ', err);
        this.loading = false;
      },
    });
  }
}
