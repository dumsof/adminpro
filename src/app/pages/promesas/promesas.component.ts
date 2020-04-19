import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    /* DUM: funcion que escucha la promesa then simula una llamada azincrona */
    this.constarHastaTres().then(mensajeRespuestaPromesa => {
      console.log('Termino la promesa!: ', mensajeRespuestaPromesa);
    }).catch(errorPromesa => {
      console.log('Error en la promesa :', errorPromesa);
    });
  }

  ngOnInit(): void {
  }

  constarHastaTres(): Promise<string> {
    /* en la promesa siempre se deben colocar los parametros resolve: todo bien, rejects: algo salio mal */
    const promesa = new Promise<string>((resolve, rejects) => {
      let contador = 0;
      /* DUM: intervalos de un segundo 1000 */
      const intervalo = setInterval(() => {

        contador += 1;
        console.log('Contador :', contador);
        if (contador === 3) {
          /* DUM: con esto indica que la promesa esta resuelta */
          resolve('Valor enviado al finalizar la promesa.');
          /* DUM: finalizar la ejecución del intervalor */
          clearInterval(intervalo);
        }
      }, 1000);
    });
    return promesa;
  }

}
