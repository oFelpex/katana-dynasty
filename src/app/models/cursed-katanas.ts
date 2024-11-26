import { BaseKatana } from './base-katanas';

export interface CursedKatanas extends BaseKatana {
  class: 'cursed';
  curseTitle: string;
  curseDescription: string;
}
