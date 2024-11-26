import { BaseKatana } from './base-katanas';

export interface LegendaryKatanas extends BaseKatana {
  class: 'legendary';
  ancientSwordsman: string;
  legend: string;
  dormantPowerName: string;
  dormantPowerDescription: string;
}
