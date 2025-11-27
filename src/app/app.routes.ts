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
    path: 'nurse-list',
    component: NurseList
  },
  {
      path: 'nurse-find',
      component: NurseFind
  },
];
