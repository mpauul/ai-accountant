import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClientManagerComponent } from './pages/client-manager/client-manager.component';

export const routes: Routes = [
    {
      path: '',
      component: ClientManagerComponent,
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
];
