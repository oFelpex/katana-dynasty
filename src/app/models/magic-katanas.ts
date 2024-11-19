import { CommunKatanas } from './commun-katanas';

export interface MagicKatanas extends CommunKatanas {
  creator: string;
  spells: string;
}
