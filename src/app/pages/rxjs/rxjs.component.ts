import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  /* DUM: esta suscripcion permite asignarle un observable para luego cancelar la suscripcion
  esto permite que al abandonar la página el observable deje de escuchar y se apague,
  la salida de la suscripcion se realiza en el envento ngOnDestroy */
  subscription: Subscription;
  constructor() {


    /* DUM: el pipe permite transformas los datos agregando otras funciones */
    /* this.regresaObaservable().pipe(
      //DUM retry se untiliza para realizar reintentod despues del error, se ejecuta desde la linea que sucedio el error 
      retry(2)
    ).subscribe(
      resulNumeroContador => console.log('Valor observable enviado por next:', resulNumeroContador),
      error => console.error('Error observable :', error),
      () => console.log('El observador Termino se Completo!!')
    ); */

    /* DUM: lo de arriba funciona es para el manejo de retry, intentar cuando hay un error
       1. se sigue con el manejo del map */
    this.subscription = this.observableManejoMap().subscribe(
      resulNumeroContador => console.log('Valor observable enviado por next:', resulNumeroContador),
      error => console.error('Error observable :', error),
      () => console.log('El observador Termino se Completo!!')
    );

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    /* DUM: evento que se ejecuta cuando se sale de esta pagina */
    console.log('Evento Destroy, Abandono la página observable esta se cerrara!!');
    this.subscription.unsubscribe();
  }
  regresaObaservable(): Observable<number> {
    const observable = new Observable<number>(observer => {

      let contador = 0;
      const intervalo = setInterval(() => {
        contador += 1;
        /* DUM: valor del observable que se pasara a todos lo que esten suscritos al observable
          1. No Importa que se cambie de pagina, siempre se ejecutara la suscripcion cuando el valor next reciba un valor
          2. solo se reinicia cuando se refresca la pagina o el sitio */
        observer.next(contador);

        if (contador === 3) {
          /* DUM: parar limpiar el generador de intervalo pasando el intervalo como parametro */
          clearInterval(intervalo);
          /* DUM: indicar que el observable termino la tarea, informa a todos los suscritos */
          observer.complete();
        }
        /* DUM: desde aqui ocurre el erro, retry */
        if (contador === 2) {
          clearInterval(intervalo);
          /* enviar un error del observador a los suscritos de forma manual */
          observer.error('Error contador es igual 2');
        }

      }, 1000);
    });
    return observable;
  }

  observableManejoMap(): Observable<any> {
    const observable = new Observable<any>(observer => {

      let contador = 0;
      const intervalo = setInterval(() => {
        contador++;

        const respuestaSimuladaServicio = {
          valor: contador
        };

        /* DUM: valor del observable que se pasara a todos lo que esten suscritos al observable
          1. No Importa que se cambie de pagina, siempre se ejecutara la suscripcion cuando el valor next reciba un valor
          2. solo se reinicia cuando se refresca la pagina o el sitio */
        observer.next(respuestaSimuladaServicio);

        /*  if (contador === 3) { */
        /* DUM: parar limpiar el generador de intervalo pasando el intervalo como parametro */
        /*  clearInterval(intervalo); */
        /* DUM: indicar que el observable termino la tarea, informa a todos los suscritos, se comenta para hacer la ejecución
        infinita para utilizar el unsuscribe del observador y el evento destroy */
        /* observer.complete(); */
        /* } */

      }, 1000);
    }).pipe(
      /* DUM: esta función map permite transformar los valores de salida de un observable */
      map(transformarRespuestaServicio => transformarRespuestaServicio.valor),
      /* DUM: filter permte condicionar o filtrar los datos de salida, en este caso solo los impares
      este operador funciona asociado al operador map */
      filter((valor: number, index) => {
        if ((valor % 2) === 1) {
          /* impar */
          return true;
        } else {
          return false;
        }
      })
    );
    return observable;
  }
}
