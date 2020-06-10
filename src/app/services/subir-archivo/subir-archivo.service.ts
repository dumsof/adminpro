import { Injectable } from '@angular/core';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class SubirArchivoService {



  constructor() { }
  /*DUM: Sirve para subir cualquier archivo */
  subirArchivo(archivo: File, tipo: string, id: string) {
    return new Promise((resolve, reject) => {

      const formData = new FormData();
      const xhr = new XMLHttpRequest();
      formData.append('imagen', archivo, archivo.name);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };
      const url = `${environment.URL_SERVICIOS}/upload/${tipo}/${id}`;
      xhr.open('PUT', url, true);
      xhr.send(formData);
    });
  }
}
