import { BaseKatana } from './base-katanas';

export interface MagicKatanas extends BaseKatana {
  class: 'magic';
  spellName: string;
  spellDescription: string;
}
