import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./nurse-find/nurse-find').then(m => m.NurseFind)
    },
    {
        path: 'nurse_find',
        loadComponent: () =>
            import('./nurse-find/nurse-find').then(m => m.NurseFind)
    }
];
