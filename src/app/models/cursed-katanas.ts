import { Katanas } from './katanas';
export interface CursedKatanas extends Katanas {
  class: 'cursed';
  curseTitle: string;
  curseDescription: string;
}
