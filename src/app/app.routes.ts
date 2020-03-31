import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

const routes: Routes = [
    /* debido que se  quiere que el login tenga un estilo diferente se pasa toda la logica 
    de maquetacion del app component a pages componene */
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graficas1', component: Graficas1Component },
            /* DUM: la ruta por defecto direcciona al dashboard */
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        ]

    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    /* DUM: ruta incorrecta o no valida direciona a esta pagina de ruta no encontrada */
    { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(routes, { useHash: true });
