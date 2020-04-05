import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @Input() leyenda = 'Leyenda';
  @Input() progreso = 50;

  /* 1. notificar al padre progress que se emitara un cambio que es el progreso.
     2. El evento se declara que devolvera un numero */
  @Output() eventCambioValorProgreso = new EventEmitter<number>();

  constructor() {
    console.log('Leyenda:', this.leyenda);
    console.log('Progreso:', this.progreso);
  }

  ngOnInit(): void {
    console.log('Leyenda:', this.leyenda);
    console.log('Progreso:', this.progreso);
  }

  cambiarValor(valor: number) {

    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;

    /* este es el valor que se pasara a los que esten suscritos al eventemitter */
    this.eventCambioValorProgreso.emit(this.progreso);
  }

}
