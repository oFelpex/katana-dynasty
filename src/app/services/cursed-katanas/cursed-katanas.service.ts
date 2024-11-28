import { Injectable } from '@angular/core';
import { CursedKatanas } from '../../models/cursed-katanas';

@Injectable({
  providedIn: 'root',
})
export class CursedKatanasService {
  private cursedKatanas: CursedKatanas[] = [
    {
      id: 0,
      class: 'cursed',
      imgSRC:
        '../../../../assets/images/products/katanas/cursedKatanas/Deadly Katana.webp',
      imgALT: 'Deadly Katana',
      title: 'Deadly Katana',
      description: `An odachi capable of slaying the undying. Its crimson blade will take the life of any who dares draw it. Without the power of Resurrection, one could not hope to wield this weapon, which allows one to defeat even infested beings. Long concealed within Senpou Temple, the blade is inscribed with its true name: "Gracious Gift of Tears".`,
      price: 7150,
      curseTitle: 'Instant Death',
      curseDescription:
        'The user dies instantly when drawing the katana for the first time, it is said that only those capable of revival can use it.',
      stock: 4,
    },
    {
      id: 1,
      class: 'cursed',
      imgSRC:
        '../../../../assets/images/products/katanas/communKatanas/Enma Sheathed.webp',
      imgALT: 'Enma Sheathed',
      title: 'Enma Sheathed',
      description: `Enma is the king of Hell in Japanese Buddhist myth, the judge of dead souls. He is the Japanese version of Yama, the king of hell found in sects of Buddhism across East Asia; Enma mostly derives from the Chinese-Buddhist Yánluó, who in turn is based on the Hindu (Vedic) god of death, also called Yama.`,
      price: 6800,
      curseTitle: 'Power Absorption',
      curseDescription:
        "The katana will constantly absorb the user's life force, and transform it into power, if the user is not strong enough, the katana will suck out their soul, killing them.",
      stock: 5,
    },
    {
      id: 2,
      class: 'cursed',
      imgSRC: `../../../../assets/images/products/katanas/communKatanas/Rakshara's Great Katana.webp`,
      imgALT: `Rakshara's Great Katana`,
      title: `Rakshara's Great Katana`,
      description: `A great katana with the tempering pattern of its blade forever stained red with blood. Weapon of Rakshasa, who cuts down and devours. A berserker's weapon used to endure enemy attacks and reply with one's full fury. When attacking, the wielder is less likely to stagger from counterattacks, but will also take increased damage.`,
      price: 4899,
      curseTitle: 'Blood Addiction',
      curseDescription:
        'The katana is addicted to absorbing the blood of its opponents, this addiction is passed on to the user, who becomes a murderous maniac addicted to killing.',
      stock: 6,
    },
    {
      id: 3,
      class: 'cursed',
      imgSRC:
        '../../../../assets/images/products/katanas/communKatanas/Rivers of Blood.webp',
      imgALT: 'Rivers of Blood',
      title: 'Rivers of Blood',
      description: `Weapon of Okina, swordsman from the Land of Reeds. A cursed weapon that has felled countless men. When Mohg, the Lord of Blood, first felt Okina's sword, and madness, upon his flesh, he had a proposal, to offer Okina the life of a demon, whose thirst would never go unsated.`,
      price: 5100,
      curseTitle: 'Blood Manipulation',
      curseDescription: `The katana has the ability to manipulate its user's blood, and when the user injures someone with the katana, it uses the user's own blood to burn their opponents as if it were acid, from the inside out.`,
      stock: 3,
    },
  ];

  getCursedKatanas(): CursedKatanas[] {
    return this.cursedKatanas;
  }
}
