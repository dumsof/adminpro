import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '@env';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(imagen: string, tipo: string = 'usuario'): any {
    const url = environment.URL_SERVICIOS + '/img';
    if (!imagen) {
      return url + '/usuarios/imagenPorDefecto';
    }
    /* DUM: se valida si la imagen es de google */
    if (imagen.indexOf('https') >= 0) {
      return imagen;
    }
    switch (tipo) {
      case 'usuario':
        return url + '/usuarios/' + imagen;
      case 'medico':
        return url + '/medicos/' + imagen;
      case 'hospital':
        return url + '/hospitales/' + imagen;
      default:
        console.log('Tipo de imagen no existe, dében ser usuario, medico, hospital');
        return url + '/usuarios/imagenPorDefecto';
    }
  }
}
