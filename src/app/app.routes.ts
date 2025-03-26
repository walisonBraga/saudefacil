import { Routes } from '@angular/router';
import { SignInComponent } from './shared/firebase/sign-In/components/sign-in/sign-in.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: SignInComponent, data: { title: 'Login' } },
  { path: 'saude-facil', loadChildren: () => import('./shared/components/saude.module').then(m => m.SaudeModule) },
];
