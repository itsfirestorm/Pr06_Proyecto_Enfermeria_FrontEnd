import { NurseList } from './nurse-list/nurse-list';
import { App } from './app';
import { NurseFind } from './nurse-find/nurse-find';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'',
      loadComponent:()=>
          import('./home/home').then(m=>m.Home)
  },
  {path:'home/:user/:upasswd',
      loadComponent:()=>
          import('./home/home').then(m=>m.Home)
  },
  {
    path: '',
    component: App
  },
  {
    path: 'nurselist',
    component: NurseList
  },
  {
      path: 'nurse_find',
      component: NurseFind
  },
];
