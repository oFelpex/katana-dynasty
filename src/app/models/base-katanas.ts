export interface BaseKatana {
  id: number;
  class: 'commun' | 'legendary' | 'magic' | 'cursed';
  imgSRC: string;
  imgALT: string;
  title: string;
  description: string;
  price: number;
  stock: number;
}
