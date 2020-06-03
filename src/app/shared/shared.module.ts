import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/* Modulos */
import { PipesModule } from '@/pipes/pipes.module';

/* DUM: componentes del modulo que se proveen en el módulo principal */
import { NopagefoundComponent } from '@shared/nopagefound/nopagefound.component';
import { HeaderComponent } from '@shared/header/header.component';
import { SidebarComponent } from '@shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from '@shared/breadcrumbs/breadcrumbs.component';

@NgModule({
    imports: [
        /*DUM:se debe importar con el fin de magenar las rutas en angula, debido que esto no esta en el modulo principal
        con esto se puede manejar en el sidebar routerlink, routeractive */
        RouterModule,
        /*DUM: se necesita para el uso de las directivas de angular,Ej ngIf, ngFor en el componente sidebar */
        CommonModule,
        /* DUM: se importa el pipe de la imagen */
        PipesModule
    ],
    declarations: [
        NopagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,

    ],
    exports: [
        NopagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
    ]
})
export class SharedModule { }
