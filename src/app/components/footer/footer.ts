import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule,RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
// Flag to control the visibility of the "Back to Top" button

  // Define footer data for links and icons
  // In a real app, this data might be fetched from a service (like in the previous example)
  siteMapLinks = [
    { label: 'Home', url: '/' },
    { label: 'Individual-Products', url: '/individual' },
    { label: 'Organization-Products', url: '/organization' },
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' },
  ];
  scrollToTop() {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 50);
}


  legalLinks = [
    { label: 'Privacy Policy', url: '/privacy' },
    { label: 'Terms of Services', url: '/terms' },
    { label: "Lawyer's Corners", url: '/lawyers-corner' },
  ];

  socialIcons = [
  { name: 'X', class: 'fa-brands fa-x-twitter', url: 'https://x.com/carthageinvest' },
  { name: 'LinkedIn', class: 'fab fa-linkedin-in', url: 'https://linkedin.com/company/carthage-society/' },
  { name: 'Instagram', class: 'fab fa-instagram', url: 'https://www.instagram.com/carthage_society_ke' },
  { name: 'Facebook', class: 'fab fa-facebook-f', url: 'https://www.facebook.com/share/19z36zi2Dx/?mibextid=wwXIfr' },
   ];
   
}