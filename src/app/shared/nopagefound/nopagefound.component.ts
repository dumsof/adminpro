import { Component, OnInit } from '@angular/core';

/* DUM: se llama la función del archivo de js/custom.js para que se cargue el menu dinamico sidebar */
declare function inicio_plugins();

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styles: []
})
export class NopagefoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    inicio_plugins();
  }

}
