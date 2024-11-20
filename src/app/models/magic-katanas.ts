import { Katanas } from './katanas';

export interface MagicKatanas extends Katanas {
  class: 'magic';
  spellName: string;
  spellDescription: string;
}
