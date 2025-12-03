import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Organization } from './components/organization/organization';
import { Individual } from './components/individual/individual';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'organization', component: Organization },
  { path: 'individual', component: Individual },
  { path: 'contact', component: Contact }
];
