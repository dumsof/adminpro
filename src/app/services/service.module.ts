import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/* DUM: importar los servicios para despues proveerlos en el modulo principal */
import {
  SettingsService,
  SidebarService,
  SharedService
} from '@services/service.index';


@NgModule({
  declarations: [],
  providers: [
    SettingsService,
    SidebarService,
    SharedService
  ],
  imports: [
    CommonModule
  ]
})
export class ServiceModule { }
