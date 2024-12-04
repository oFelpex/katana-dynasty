import { Component, Input } from '@angular/core';
import { CommonKatanas } from '../../models/common-katanas';
import { CursedKatanas } from '../../models/cursed-katanas';
import { LegendaryKatanas } from '../../models/legendary-katanas';
import { MagicKatanas } from '../../models/magic-katanas';
import { Katanas } from '../../models/katanas';
import { BaseKatana } from '../../models/base-katanas';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-latest-katana',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './latest-katana.component.html',
  styleUrl: './latest-katana.component.scss',
})
export class LatestKatanaComponent {
  @Input()
  lastAddedKatana!: Katanas;

  isCommonKatana(katana: any): katana is CommonKatanas {
    return katana.class === 'common';
  }

  isLegendaryKatana(katana: any): katana is LegendaryKatanas {
    return katana.class === 'legendary';
  }

  isMagicKatana(katana: any): katana is MagicKatanas {
    return katana.class === 'magic';
  }

  isCursedKatana(katana: any): katana is CursedKatanas {
    return katana.class === 'cursed';
  }
}
