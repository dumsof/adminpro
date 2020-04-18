import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* rutas */
import { APP_ROUTES } from '@/app.routes';

/* modulos */
import { PagesModule } from '@/pages/pages.module';

/* componentes */
import { AppComponent } from '@/app.component';
import { LoginComponent } from '@/login/login.component';
import { RegisterComponent } from '@/login/register.component';

/* DUM: Servicios modulos */
import { ServiceModule } from '@services/service.module';

/* TUDO:temporal para quitar y pasar al modulo de page, cuando se lleve el componente incrementador */
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
