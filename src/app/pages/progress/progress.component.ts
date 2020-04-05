import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progresoUno: number;

  progresoDos: number;

  constructor() {
    this.progresoUno = 20;
    this.progresoDos = 30;
  }

  ngOnInit(): void {
  }
  /* 1. el valorEventCambioValorProgreso se pasa del componente incrementador
     2. es un ouput que envia un number que seria lo que se incrementa para el progreso *
     3. $event es lo que se recibe del eventemitter un numereo del components 
        incrementador que seria eventCambioValorProgreso*/
  actualizarProgresoUno(valorEventCambioValorProgreso: number) {
    this.progresoUno = valorEventCambioValorProgreso;
    /*   console.log('Event barra uno:', valorEventCambioValorProgreso); */
  }

  actualizarProgresoDos(valorEventCambioValorProgreso: number) {
    this.progresoDos = valorEventCambioValorProgreso;
    /*  console.log('Event barra Dos:', valorEventCambioValorProgreso); */
  }

}
