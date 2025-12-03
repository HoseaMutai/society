import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-individual',
  imports: [Navbar,Footer,CommonModule],
  templateUrl: './individual.html',
  styleUrl: './individual.scss',
})
export class Individual {
services = [
    {
      title: 'Silver Plan',
      icon: 'fa-solid fa-medal',
      description:
        'Begin your investment journey with a minimum contribution of KES 5,000. Perfect for first-time investors who want to grow their savings steadily and confidently.',
    },
    {
      title: 'Gold Plan',
      icon: 'fa-solid fa-crown',
      description:
        'With a minimum contribution of KES 20,000, the Gold Plan offers stronger returns and a balanced approach to wealth growth. Ideal for professionals committed to securing their financial future',
    },
    {
      title: 'Platinum Plan',
      icon: 'fa-solid fa-gem',
      description:
        'Designed for serious investors contributing KES 100,000 or more. Enjoy premium growth opportunities,personalized service and access to exclusive investment benefits.',
    },
   
  ];
}
