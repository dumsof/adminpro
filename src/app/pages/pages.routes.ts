import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from '@pages/pages.component';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { ProgressComponent } from '@pages/progress/progress.component';
import { Graficas1Component } from '@pages/graficas1/graficas1.component';
import { AccoutSettingsComponent } from '@pages/accout-settings/accout-settings.component';
import { PromesasComponent } from '@pages/promesas/promesas.component';
import { RxjsComponent } from '@pages/rxjs/rxjs.component';


const pagesRoutes: Routes = [
    /* debido que se  quiere que el login tenga un estilo diferente se pasa toda la logica 
    de maquetacion del app component a pages componene */
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graficas1', component: Graficas1Component },
            { path: 'account-settings', component: AccoutSettingsComponent },
            { path: 'promesas', component: PromesasComponent },
            { path: 'rxjs', component: RxjsComponent },
            /* DUM: la ruta por defecto direcciona al dashboard */
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        ]

    }
];
/* las rutas de esta paginas serian rutas hijas */
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
