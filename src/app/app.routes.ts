import { Routes } from '@angular/router';
import { SignInComponent } from './shared/firebase/sign-In/components/sign-in/sign-in.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
  { path: 'login', component: SignInComponent, data: { title: 'Login' } }
  // { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  // { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  // { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  // Add more routes here
];
