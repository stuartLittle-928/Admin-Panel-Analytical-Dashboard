import { ChildActivationEnd, Routes } from '@angular/router';
import { data } from 'jquery';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
   
    {
        path: '',
        loadComponent: () => import('./components/layout/layout.component').then(m => m.LayoutComponent),
        children: [
          {
            path: '',
            loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent),
          },
          {
            path: 'form',
            loadComponent: () => import('./components/forms/forms.component').then(m => m.FormsComponent),
          }
        ]
      },


];
