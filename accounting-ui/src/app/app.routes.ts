import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClientManagerComponent } from './pages/client-manager/client-manager.component';
import { UploadDocsComponent } from './pages/upload-docs/upload-docs.component';

export const routes: Routes = [
    {
      path: '',
      component: UploadDocsComponent,
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'upload',
      component: UploadDocsComponent,
    },
];
