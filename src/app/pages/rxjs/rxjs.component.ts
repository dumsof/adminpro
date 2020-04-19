import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {

    const observable = new Observable(observer => {

      let contador = 0;
      const intervalo = setInterval(() => {
        contador += 1;
        /* DUM: valor del observable que se pasara a todos lo que esten suscritos al obserbable
          1. No Importa que se cambie de pagina, siempre se ejecutara la suscripcion cuando el valor next reciba un valor
          2. solo inicia cuando se refresca la pagina o el sitio */
        observer.next(contador);

        if (contador === 3) {
          /* DUM: parar in limpiar el generador de intervalo */
          clearInterval(intervalo);
          /* DUM: indicar que el observable termino la tarea, informa a todos los suscritos */
          observer.complete();
        }

        if (contador === 2) {
          /* enviar un error del observador a los suscritos de forma manual */
          observer.error('Error contador es igual 2');
        }

      }, 1000);
    });

    observable.subscribe(
      resulNumeroContador => console.log('Valor observable enviado por next:', resulNumeroContador),
      error => console.error('Error observable :', error),
      () => console.log('El observador Termino se Completo!!')
    );
  }

  ngOnInit(): void {
  }
}
