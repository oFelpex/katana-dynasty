import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

export type BlossomSceneConfig = {
  id: string;
  petalsTypes: Petal[];
  numPetals?: number;
  gravity?: number; // 0.2 ~ 1
  windMaxSpeed?: number;
};

interface PetalConfig {
  customClass?: string;
  x?: number;
  y?: number;
  z?: number;
  xSpeedVariation?: number;
  ySpeed?: number;
  rotation?: PetalRotation;
}

type PetalRotation = {
  axis: 'X' | 'Y' | 'Z';
  value: number;
  speed: number;
  x: number;
};

export class Petal implements PetalConfig {
  el: HTMLElement;
  customClass: string;
  x: number;
  y: number;
  z: number;
  xSpeedVariation: number;
  ySpeed: number;
  rotation: { axis: 'X' | 'Y' | 'Z'; value: number; speed: number; x: number };

  constructor(config: PetalConfig) {
    this.customClass = config.customClass || '';
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.z = config.z || 0;
    this.xSpeedVariation = config.xSpeedVariation || 0;
    this.ySpeed = config.ySpeed || 0;
    this.rotation = {
      axis: 'X',
      value: 0,
      speed: 0,
      x: 0,
    };

    if (config.rotation) {
      this.rotation.axis = config.rotation.axis || this.rotation.axis;
      this.rotation.value = config.rotation.value || this.rotation.value;
      this.rotation.speed = config.rotation.speed || this.rotation.speed;
      this.rotation.x = config.rotation.x || this.rotation.x;
    }

    this.el = document.createElement('div');
    this.el.className = `petal ${this.customClass}`;
    this.el.style.position = 'absolute';
    this.el.style.backfaceVisibility = 'visible';
  }
}

@Component({
  selector: 'app-cherry-blossom-petals',
  standalone: true,
  templateUrl: './cherry-blossom-petals.component.html',
  styleUrls: ['./cherry-blossom-petals.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CherryBlossomPetalsComponent implements OnInit {
  @Input() config!: BlossomSceneConfig;

  private petals: Petal[] = [];
  private width = 0;
  private height = 0;
  private windMagnitude = 0.2;
  private windDuration = 0;
  private timer = 0;

  constructor() {}

  ngOnInit(): void {
    this.validateConfig();

    const container = document.querySelector(
      `#${this.config.id}`
    ) as HTMLDivElement;
    if (!container) {
      throw new Error(`Container with ID "${this.config.id}" not found.`);
    }

    this.width = container.offsetWidth;
    this.height = container.offsetHeight;

    if (!this.width || !this.height) {
      console.error('Container dimensions are invalid:', {
        width: this.width,
        height: this.height,
      });
    }

    this.createPetals(container);
    requestAnimationFrame(this.updateFrame.bind(this));
  }

  private validateConfig(): void {
    if (!this.config) {
      throw new Error('Configuration object (config) is required.');
    }

    if (!this.config.petalsTypes || this.config.petalsTypes.length === 0) {
      throw new Error('At least one petal type is required in "petalsTypes".');
    }
  }

  private createPetals(container: HTMLElement): void {
    for (let i = 0; i < this.config.numPetals!; i++) {
      const petalType =
        this.config.petalsTypes[
          Math.floor(Math.random() * this.config.petalsTypes.length)
        ];
      const petal = new Petal({ customClass: petalType.customClass });

      this.resetPetal(petal);
      this.petals.push(petal);
      container.appendChild(petal.el);
    }
  }

  private resetPetal(petal: Petal): void {
    petal.x = this.width - Math.random() * this.width * 1.75;
    petal.y = petal.el.offsetHeight - Math.random() * this.height;
    petal.z = Math.random() * 200;

    if (petal.x > this.width) {
      petal.x = this.width + petal.el.offsetWidth;
      petal.y = (Math.random() * this.height) / 2;
    }

    petal.rotation.speed = Math.random() * 10;
    const randomAxis = Math.random();
    if (randomAxis > 0.5) {
      petal.rotation.axis = 'X';
    } else if (randomAxis > 0.25) {
      petal.rotation.axis = 'Y';
      petal.rotation.x = Math.random() * 180 + 90;
    } else {
      petal.rotation.axis = 'Z';
      petal.rotation.x = Math.random() * 360 - 180;
      petal.rotation.speed = Math.random() * 3;
    }

    petal.xSpeedVariation = Math.random() * 0.8 - 0.4;
    petal.ySpeed = Math.random() + this.config.gravity!;
  }

  private updateFrame(): void {
    if (this.timer === this.windDuration) {
      this.updateWind();
      this.timer = 0;
    }

    for (const petal of this.petals) {
      this.updatePetal(petal);
    }

    this.timer++;
    requestAnimationFrame(this.updateFrame.bind(this));
  }

  private updatePetal(petal: Petal): void {
    const windSpeed = this.calculateWindSpeed(this.timer, petal.y);
    const xSpeed = windSpeed + petal.xSpeedVariation;

    petal.x -= xSpeed;
    petal.y += petal.ySpeed;
    petal.rotation.value += petal.rotation.speed;

    let transform = `translateX(${petal.x}px) translateY(${petal.y}px) translateZ(${petal.z}px) rotate${petal.rotation.axis}(${petal.rotation.value}deg)`;
    if (petal.rotation.axis !== 'X') {
      transform += ` rotateX(${petal.rotation.x}deg)`;
    }
    petal.el.style.transform = transform;

    if (petal.x < -10 || petal.y > this.height + 10) {
      this.resetPetal(petal);
    }
  }

  private calculateWindSpeed(t: number, y: number): number {
    const a =
      (this.windMagnitude / 2) * ((this.height - (2 * y) / 3) / this.height);
    return (
      a *
        Math.sin(((2 * Math.PI) / this.windDuration) * t + (3 * Math.PI) / 2) +
      a
    );
  }

  private updateWind(): void {
    this.windMagnitude = Math.random() * this.config.windMaxSpeed!;
    this.windDuration = this.windMagnitude * 50 + (Math.random() * 20 - 10);
  }
}
