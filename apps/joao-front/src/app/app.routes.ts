import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'teste',
        loadComponent: () => import('./teste.component').then(c => c.TesteComponent),
    }
];
