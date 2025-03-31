import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then((m) => m.DashboardRoutes),
  },
  {
    path :'',
    redirectTo :'dashboard',
    pathMatch: 'full'
  }
];
