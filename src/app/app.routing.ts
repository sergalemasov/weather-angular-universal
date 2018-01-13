import { Routes } from '@angular/router';
import { IndexComponent, DetailComponent, NoContentComponent } from './components';

export const ROUTES: Routes = [
  { path: 'index',
    component: IndexComponent,
  },
  { path: 'detail',
    component: DetailComponent,
  },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  { path: '**', component: NoContentComponent }
];