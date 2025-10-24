import { Routes } from '@angular/router';
import {About} from './about/about';
import {ContactComponent} from './contact-component/contact-component';

export const routes: Routes = [
  {path : 'about', component : About},
  {path : 'contact', component : ContactComponent},
];
