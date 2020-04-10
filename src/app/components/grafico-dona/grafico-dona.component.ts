import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {
  /* esta información por defecto se diligencia en el grafico si el padre no pasa datos para los input */
  @Input() graficoTitulo: Label[] = [];
  @Input() graficoDato: number[] = [];
  @Input() graficoTipo: ChartType = 'doughnut';
  constructor() { }

  ngOnInit(): void {
    /* en este envento se puede visualizar la informacion que envia el padre. */
    console.log('Etiqueta Titulo:', this.graficoTitulo);
    console.log('Datos Mostrar:', this.graficoDato);
  }

   // events
 /*  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  } */

}
