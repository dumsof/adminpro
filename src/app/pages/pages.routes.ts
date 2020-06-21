import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from '@pages/pages.component';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { ProgressComponent } from '@pages/progress/progress.component';
import { Graficas1Component } from '@pages/graficas1/graficas1.component';
import { AccoutSettingsComponent } from '@pages/accout-settings/accout-settings.component';
import { PromesasComponent } from '@pages/promesas/promesas.component';
import { RxjsComponent } from '@pages/rxjs/rxjs.component';
import { LoginGuardGuard } from '@/services/service.index';
import { ProfileComponent } from '@pages/profile/profile.component';
import { UsuariosComponent } from '@pages/usuarios/usuarios.component';
import { HospitalesComponent } from '@pages/hospitales/hospitales.component';

const pagesRoutes: Routes = [
    /* debido que se  quiere que el login tenga un estilo diferente se pasa toda la logica 
    de maquetacion del app component a pages componene */
    /* DUM: el parametro data se le puede pasar cualquier informacion o structura, en este caso el titilo del menú 
        esta información se utilizara en el breadcrumbs en router envento*/
    {
        path: '',
        component: PagesComponent,
        canActivate: [LoginGuardGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress Bar' } },
            { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' } },
            { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs Observables' } },
            { path: 'account-settings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes del Tema' } },
            { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de Usuario' } },
            /* DUM: paginas de mantenimiento */
            { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Mantenimientos de usuario' } },
            { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Mantenimientos de hospitales' } },
            /* DUM: la ruta por defecto direcciona al dashboard */
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        ]

    }
];
/* las rutas de esta paginas serian rutas hijas */
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
