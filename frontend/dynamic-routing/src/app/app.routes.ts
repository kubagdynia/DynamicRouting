import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'c1',
        loadComponent: () => import('./features/my-test-1/my-test-1.component').then((m) => m.MyTest1Component),
      },
      {
        path: 'c2',
        loadComponent: () => import('./features/my-test-2/my-test-2.component').then((m) => m.MyTest2Component),
      },
      {
        path: '**',
        redirectTo: 'c1',
        pathMatch: 'full',
      },
    ],
  },
];
