import { Injectable } from '@angular/core';
import { LegendaryKatanas } from '../../models/legendary-katanas';

@Injectable({
  providedIn: 'root',
})
export class LegendaryKatanasService {
  private legendaryKatanas: LegendaryKatanas[] = [
    {
      id: 0,
      class: 'legendary',
      imgSRC: `../../../../assets/images/products/katanas/legendaryKatanas/Dragon-Hunter's Great Katana.webp`,
      imgALT: `Dragon-Hunter's Great Katana`,
      title: `Dragon-Hunter's Great Katana`,
      description: `Great katana with spines of gravel stone along its blade, wielded by the Ancient Dragon-Man of the Dragon's Pit. Has an anti-dragon effect.`,
      price: 7199,
      ancientSwordsman: 'Ancient Dragon-Man',
      legend:
        'Formerly a Dragon Communion warrior, the Ancient Dragon-Man was once arbiter of those worthy to devour the Dreaded One.',
      dormantPowerName: 'Dragonwound Slash',
      dormantPowerDescription:
        'Is ideal for hunting dragons, granting the armament a cloak with anti-dragon effect, before performing a powerful slash.',
    },
    {
      id: 1,
      class: 'legendary',
      imgSRC:
        '../../../../assets/images/products/katanas/legendaryKatanas/Dragonscale Blade.webp',
      imgALT: 'Dragonscale Blade',
      title: 'Dragonscale Blade',
      description: `A weapon made by sharpening a Gravel Stone scale, thought to be the source of ancient dragon immortality, into an unclouded blade.`,
      price: 9550,
      ancientSwordsman: 'Alas, the Dragonkin Soldiers',
      legend:
        'Alas, the Dragonkin Soldiers never attained immortality, and perished as decrepit, pale imitations of their skyborn kin.',
      dormantPowerName: 'Ice Lightning Sword',
      dormantPowerDescription:
        'Calls down a bolt of ice lightning that damages an enemy. It also leaves the blade with extra lightning damage and frostbite buildup for the next 45 seconds.',
    },
    {
      id: 2,
      class: 'legendary',
      imgSRC:
        '../../../../assets/images/products/katanas/legendaryKatanas/Hand of Malenia.webp',
      imgALT: 'Hand of Malenia',
      title: 'Hand of Malenia',
      description: `Blade built into Malenia's prosthetic arm. Through consecration it is resistant to rot.`,
      price: 22000,
      ancientSwordsman: 'Malenia, Goddess of Rot',
      legend:
        'She is the Empyrean twin sister of Miquella and gained renown for her legendary battle against Starscourge Radahn during the Shattering, in which she unleashed the power of the Scarlet Rot and reduced Caelid to ruins.',
      dormantPowerName: 'Waterfowl Dance',
      dormantPowerDescription:
        'Perform a series of one-footed leaps in the manner of a waterfowl to unleash a swift yet graceful slashing combo. Repeated inputs allow for up to two follow-up attacks',
    },
    {
      id: 3,
      class: 'legendary',
      imgSRC:
        '../../../../assets/images/products/katanas/legendaryKatanas/Shusui.webp',
      imgALT: 'Shusui',
      title: 'Shusui',
      description: `Shusui is a black blade that has as distinct white (reddish-purple in the anime) reverse wave hamon (hardening line) that is of a Kanemoto style and its tsuba (handguard) has flower-like edges in the shape of an octofoil. It also has no accessories on the hilt, being wrapped with black silk. Kashira, tsuba and kojiri end cap are golden, and the sheath is black, decorated with dark red circles split into even thirds.`,
      price: 15000,
      ancientSwordsman: 'Shimotsuki Ryuma',
      legend: `Shimotsuki Ryuma was a legendary, world-famous samurai hailing from the Shimotsuki Family of Wano Country, who lived during Wano's "Country of Gold" era centuries ago. He was revered for his mastery of swordsmanship that earned him the title Sword God, as well as his feat of slaying a dragon.`,
      dormantPowerName: 'Unbreakable Spirit',
      dormantPowerDescription: `The stronger the user's willpower, the stronger the katana will be, being able to become unbreakable in a few moments.`,
    },
  ];

  getLegendaryKatanas(): LegendaryKatanas[] {
    return this.legendaryKatanas;
  }
}
