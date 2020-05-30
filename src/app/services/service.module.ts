import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* DUM: poder manejar peticiones http */
import { HttpClientModule } from '@angular/common/http';

/* DUM: importar los servicios para despues proveerlos en el modulo principal */
import {
  SettingsService,
  SidebarService,
  SharedService,
  UsuarioService
} from '@services/service.index';



@NgModule({
  declarations: [],
  providers: [
    SettingsService,
    SidebarService,
    SharedService,
    UsuarioService
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ServiceModule { }
