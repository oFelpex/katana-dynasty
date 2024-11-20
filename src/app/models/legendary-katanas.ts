import { Katanas } from './katanas';

export interface LegendaryKatanas extends Katanas {
  class: 'legendary';
  ancientSwordsman: string;
  legend: string;
  dormantPowerName: string;
  dormantPowerDescription: string;
}
