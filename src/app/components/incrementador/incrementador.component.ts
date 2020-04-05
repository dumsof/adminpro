import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  /* recibe como parametro un elemento html, se declara que es una referencia */
  @ViewChild('txtValorProgress') txtValorProgress: ElementRef;

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

  onCambioProgresoCajaTexto(nuevoValorCajaTexto: number) {
    /* let elemHTML: any = document.getElementsByName('progreso')[0]; */
    if (nuevoValorCajaTexto > 100) {
      this.progreso = 100;
    } else if (nuevoValorCajaTexto < 0) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValorCajaTexto;
    }
    /*  elemHTML.value = this.progreso; */
    /* con esto se logra que se pueda diferenciar la caja de texto del componente que esta llamando la funcion.
    porque se tiene dos componentes que utilizan la misma caja de texto, esto con el fin de que cada una conserve su valor */
    this.txtValorProgress.nativeElement.value = this.progreso;

    /* se cambia el valor del componente padre, en este caso el progres */
    this.eventCambioValorProgreso.emit(this.progreso);
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
    /* colocar el foco en el elemento actual cuando se utilizan los botones menos y mas */
    this.txtValorProgress.nativeElement.focus();
  }

}
