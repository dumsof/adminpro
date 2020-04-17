import { NgModule } from '@angular/core';
/* porder utilizar la propiedad para enlazar un elemento ngModel */
import { FormsModule } from "@angular/forms";

/* componentes */
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

/* modulos */
import { SharedModule } from '../shared/shared.module';

/* rutas hijas que serian las page */
import { PAGES_ROUTES } from './pages.routes';

/* TODU: se debe borrar y cambiar */
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
/* importar la libreria para trabajar con los graficos */
import { ChartsModule } from 'ng2-charts';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccoutSettingsComponent
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})
export class PagesModule { }
