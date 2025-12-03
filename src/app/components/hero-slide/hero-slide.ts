import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-slide',
  imports: [CommonModule],
  templateUrl: './hero-slide.html',
  styleUrl: './hero-slide.scss',
})
export class HeroSlide {
 slides = [
    {
      title: 'Grow and manage high-quality, income-generating assets that deliver fair,consistent, and sustainable returns.',
      sub: 'Sustain Wealth Creation.'
    },
    {
      title: 'Provide bespoke, affordable mortgage solutions that transform aspirations into lifelong legacies',
      sub: 'Empower Ownership.'
    },
    {
      title: 'Offer robust insurance and risk management solutions to protect members’wealth, families, and future goals.',
      sub: 'Safeguard Prosperity.'
    }
  ];

  current = 0;

  constructor() {
    setInterval(() => {
      this.current = (this.current + 1) % this.slides.length;
    }, 6000);
  }
}

