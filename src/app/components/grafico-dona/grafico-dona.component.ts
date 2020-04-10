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
  @Input() etiquetaTitulo: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() datosMostrar: number[] = [350, 450, 100];
  @Input() tipoGrafico: ChartType = 'doughnut';
  constructor() { }

  ngOnInit(): void {
    /* en este envento se puede visualizar la informacion que envia el padre. */
    console.log('Etiqueta Titulo:', this.etiquetaTitulo);
    console.log('Datos Mostrar:', this.datosMostrar);
  }

}
