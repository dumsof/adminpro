import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  tituloRutaMenu: string;
  constructor(private rutas: Router) {
    this.getDataRoute().subscribe(eventRuta => {
      this.tituloRutaMenu = eventRuta.titulo;
      console.log(eventRuta);
    });
  }

  ngOnInit(): void {
  }
  /* DUM: esta función obtiene el valor data para sacar el titulo de la ruta pages.routes */
  getDataRoute(): Observable<any> {
    return this.rutas.events.pipe(
      filter((evento: ActivationEnd) => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map((evento: ActivationEnd) => evento.snapshot.data)
    );
  }

}
