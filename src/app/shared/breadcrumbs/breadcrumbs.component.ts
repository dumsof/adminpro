import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  tituloRutaMenu: string;
  constructor(private rutas: Router, private title: Title, private meta: Meta) {
    this.getDataRoute().subscribe(eventRuta => {
      this.tituloRutaMenu = eventRuta.titulo;
      console.log(eventRuta);
      /* DUM: utilizar angular para estilo del titulo */
      this.title.setTitle(this.tituloRutaMenu);

      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.tituloRutaMenu
      };
      /* DUM: agregar el metatag a la pagina, el metatag las definiciones se muestran en los buscadores */
      this.meta.updateTag(metaTag);
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
