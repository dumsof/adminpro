import { NgModule } from '@angular/core';
/* porder utilizar la propiedad para enlazar un elemento ngModel */
import { FormsModule } from '@angular/forms';

/* componentes */
import { DashboardComponent } from '@/pages/dashboard/dashboard.component';
import { ProgressComponent } from '@/pages/progress/progress.component';
import { Graficas1Component } from '@/pages/graficas1/graficas1.component';
import { PagesComponent } from '@/pages/pages.component';
import { GraficoDonaComponent } from '@/components/grafico-dona/grafico-dona.component';
import { ProfileComponent } from '@pages/profile/profile.component';
import { UsuariosComponent } from '@pages/usuarios/usuarios.component';

/* modulos */
import { SharedModule } from '@/shared/shared.module';
import { PipesModule } from '@/pipes/pipes.module';
/* para utilizr el ngIf */
import { CommonModule } from '@angular/common';

/* rutas hijas que serian las page */
import { PAGES_ROUTES } from './pages.routes';

/* TODU: se debe borrar y cambiar */
import { IncrementadorComponent } from '@/components/incrementador/incrementador.component';
/* importar la libreria para trabajar con los graficos */
import { ChartsModule } from 'ng2-charts';
import { AccoutSettingsComponent } from '@/pages/accout-settings/accout-settings.component';
import { PromesasComponent } from '@/pages/promesas/promesas.component';
import { RxjsComponent } from '@/pages/rxjs/rxjs.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccoutSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        ProfileComponent,
        UsuariosComponent
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
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        PipesModule
    ]
})
export class PagesModule { }
