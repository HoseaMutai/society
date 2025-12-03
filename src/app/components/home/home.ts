import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSlide } from '../hero-slide/hero-slide';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';
interface ServiceItem {
  title: string;
  topic: string;
  description: string;
  imageUrl: string; // Placeholder for the actual image path
}
@Component({
  selector: 'app-home',
  imports: [CommonModule,Navbar, HeroSlide,Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
public services: ServiceItem[] = [
    {
      title: 'Silver Plan-Individual',
      topic:'"start building your future"',
      description: 'Begin your investment journey with a minimum contribution of KES 5,000. Perfect for first-time investors who want to grow their savings steadily and confidently.',
      imageUrl: '/images/pro1.png' // Placeholder
    },
    {
      title: 'Gold Plan-Individual',
      topic:'"Grow with Consistency"',
      description: 'With a minimum contribution of KES 20,000, the Gold Plan offers stronger returns and a balanced approach to wealth growth. Ideal for professionals.',
      imageUrl: '/images/pro2.png' // Placeholder
    },
    {
      title: 'Platinum Plan-Individual',
      topic:'"Maximize your Potential"',
      description: 'Designed for serious investors contributing KES 100,000 or more. Enjoy premium growth, opportunities, personalized service and access to exclusive investment opportunities.',
      imageUrl: '/images/pro3.png' // Placeholder
    },
     {
      title: 'Organization Products',
      topic:'',
      description: 'We encourage organizations to empower their teams to build long-term financial security. Each employee is encouraged to save at least the equivalent of their NSSF contribution — with the flexibility to contribute even more for greater long-term returns. It’s a simple, structured way to promote financial wellness and strengthen employee loyalty.',
      imageUrl: '/images/org1.jpg' // Placeholder
    }
  ];
}
