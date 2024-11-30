export interface BaseKatana {
  id: number;
  class: 'common' | 'legendary' | 'magic' | 'cursed';
  imgSRC: string;
  imgALT: string;
  title: string;
  description: string;
  price: number;
  stock: number;
}
