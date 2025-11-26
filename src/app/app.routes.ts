import { Routes } from '@angular/router';
import { NurseFind } from './nurse-find/nurse-find';
import { App } from './app';
import path from 'path';

export const routes: Routes = [
    {
        path: '',
        component: App
        },
    // {
    //     path: 'home',
    //     component: App
    //     },
    {
        path: 'nurse_find',
        component: NurseFind
    },
];
