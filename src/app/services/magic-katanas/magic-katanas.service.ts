import { Injectable } from '@angular/core';
import { MagicKatanas } from '../../models/magic-katanas';

@Injectable({
  providedIn: 'root',
})
export class MagicKatanasService {
  private magicKatanas: MagicKatanas[] = [
    {
      id: 0,
      imgSRC:
        '../../../../assets/images/products/katanas/magicKatanas/Meteoric Ore Blade.webp',
      imgALT: 'Meteoric Ore Blade',
      title: 'Meteoric Ore Blade',
      description: `Katana forged from meteoric ore to dispatch lifeforms born of falling stars. Deals magic damage. The blade is weighty, known to deliver slashes of such ferocity that the impact is said to resemble the crash of a falling meteor`,
      price: 7050,
      spellName: 'Gravitas',
      spellDescription:
        'Skill originating from the Alabaster Lords, who had skin of stone. Thrust the armament into the ground to create a gravity well. In addition to dealing damage, this attack pulls enemies in.',
    },
    {
      id: 1,
      imgSRC:
        '../../../../assets/images/products/katanas/magicKatanas/Moonveil.webp',
      imgALT: 'Moonveil',
      title: 'Moonveil',
      description: `Katana forged of glintstone. Masterpiece of a Sellian swordsmith. Light enwreathes the blade when sheathed, explaining its Moonveil moniker.`,
      price: 8999,
      spellName: 'Transient Moonlight',
      spellDescription:
        'Sheathe blade, holding it at the hip in a composed stance. Follow up with either a normal or a strong attack to draw the blade at great speed for an instant slash attack. Both attacks fire off a wave of light.',
    },
    {
      id: 2,
      imgSRC:
        '../../../../assets/images/products/katanas/magicKatanas/Serpentbone Blade.webp',
      imgALT: 'Serpentbone Blade',
      title: 'Serpentbone Blade',
      description: `Sinister katana modeled after a serpent bone. The densely packed row of spines that jut away from the cutting edge are coated in a lethal poison.`,
      price: 7600,
      spellName: 'Double Slash',
      spellDescription:
        'Skill of superior swordsmen. Perform a crossing slash attack from a low stance. Repeated inputs allow for up to two follow up attacks.',
    },
    {
      id: 3,
      imgSRC:
        '../../../../assets/images/products/katanas/magicKatanas/Star-Lined Sword.webp',
      imgALT: 'Star-Lined Sword',
      title: 'Star-Lined Sword',
      description: `Sword encrusted with a line of stars fashioned from small pieces of crude glintstone. Weapon of the demi-human swordsmen. When bestowed with this weapon by their queen, the swordsmen swear to find the truth that lies at the end of the procession of stars.`,
      price: 8150,
      spellName: `Onze's Line of Stars`,
      spellDescription:
        'This skill, named after a demi-human swordmaster, imbues sorcerous energy into lined glintstones and executes a slash attack. Repeated inputs allow for up to two follow-up attacks, each dealing greater damage than the last.',
    },
    {
      id: 4,
      imgSRC:
        '../../../../assets/images/products/katanas/magicKatanas/Sword of Night.webp',
      imgALT: 'Sword of Night',
      title: 'Sword of Night',
      description: `Sword of an all-consuming, bottomless black that devours even the light that shines upon it. Wielded by Jolán, Swordhand of Night. The blade of the sword is only semicorporeal, and thus cannot be guarded against completely.`,
      price: 12199,
      spellName: 'Witching Hour Slash',
      spellDescription:
        'Hold the sword level and infuse it with the dark of Night before unleashing a series of incorporeal attacks. This attack cannot be blocked. Can be charged to increase its power.',
    },
  ];

  getCommunKatanas(): MagicKatanas[] {
    return this.magicKatanas;
  }
}
