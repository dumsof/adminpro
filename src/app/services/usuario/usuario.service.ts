/* el httpclient se debe importar en el modulo HttpClientModule */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

/* importar modelo */
import { Usuario } from '@/models/usuario.model';
import { environment } from '@env';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public http: HttpClient) { }

  crearUsuario(usuario: Usuario) {
    const datosUsuario = {
      nombre: usuario.nombre,
      apellidos: usuario.apellidos,
      email: usuario.correo,
      password: usuario.password
    };
    const url = `${environment.URL_SERVICIOS}/usuario`;
    return this.http.post(url, datosUsuario).pipe(map((respuesta: any) => {
      Swal.fire('Usuario Creado', `Usuario ${ usuario.correo} creado con éxito.`, 'success');
      return respuesta.usuario;
    }));


  }

}
