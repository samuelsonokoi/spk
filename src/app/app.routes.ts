import { Routes } from '@angular/router';
import { ROUTE_CONSTANTS } from './core/constants/route.constants';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: `/${ROUTE_CONSTANTS.DASHBOARD}`,
  },
  {
    path: ROUTE_CONSTANTS.DASHBOARD,
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
  },
  { path: '**', redirectTo: `/${ROUTE_CONSTANTS.DASHBOARD}` },
];
