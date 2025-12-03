import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-organization',
  imports: [Navbar,Footer],
  templateUrl: './organization.html',
  styleUrl: './organization.scss',
})
export class Organization {

}
