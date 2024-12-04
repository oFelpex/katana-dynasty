import { CommonKatanas } from './common-katanas';
import { CursedKatanas } from './cursed-katanas';
import { LegendaryKatanas } from './legendary-katanas';
import { MagicKatanas } from './magic-katanas';

export interface Katanas {
  katanaCategory:
    | CommonKatanas
    | LegendaryKatanas
    | MagicKatanas
    | CursedKatanas;
}
