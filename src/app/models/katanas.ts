type KatanaClass = 'commun' | 'cursed' | 'magic' | 'legendary';

export interface Katanas {
  id: number;
  class: KatanaClass;
  imgSRC: string;
  imgALT: string;
  title: string;
  description: string;
  price: number;
}
