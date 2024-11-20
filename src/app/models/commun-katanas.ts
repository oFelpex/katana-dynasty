import { Katanas } from './katanas';
export interface CommunKatanas extends Katanas {
  id: number;
  class: 'commun';
  imgSRC: string;
  imgALT: string;
  title: string;
  description: string;
  price: number;
}
