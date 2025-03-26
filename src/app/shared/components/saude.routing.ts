import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';

export const SAUDE_FACIL_ROUTING: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
];

export const SaudeRoutes = RouterModule.forChild(SAUDE_FACIL_ROUTING);
