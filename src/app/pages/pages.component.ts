import { Component, OnInit } from '@angular/core';

/* DUM: se llama la función del archivo de js/custom.js para que se cargue el menu dinamico sidebar
   esta pagina es la principal x eso se debe llamar la carga de menu para el dashboard */
declare function inicio_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    inicio_plugins();
  }

}
