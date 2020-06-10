/* el httpclient se debe importar en el modulo HttpClientModule */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

/* importar modelo */
import { Usuario } from '@/models/usuario.model';
import { environment } from '@env';
import Swal from 'sweetalert2';
import { SubirArchivoService } from '@/services/subir-archivo/subir-archivo.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario: Usuario;
  token: string;
  constructor(private router: Router, public http: HttpClient, private servicioSubirArchivo: SubirArchivoService) { this.cargarStore(); }

  cargarStore() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }

  estaLogueado() {
    return this.token.length > 0;
  }

  loginGoogle(tokenGoogle: string) {
    const usuarioLogueo = {
      token: tokenGoogle
    };
    const url = `${environment.URL_SERVICIOS}/login/google`;
    return this.http.post(url, usuarioLogueo).pipe(map((respuesta: any) => {
      this.guardarStorage(respuesta.id, respuesta.token, respuesta.usuario);
      return respuesta.ok;
    }));
  }

  login(usuario: Usuario, recordar: boolean = false) {
    const usuarioLogueo = {
      email: usuario.correo,
      password: usuario.password
    };
    if (recordar) {
      localStorage.setItem('email', usuario.correo);
    } else {
      localStorage.removeItem('email');
    }
    const url = `${environment.URL_SERVICIOS}/login`;
    return this.http.post(url, usuarioLogueo).pipe(map((respuesta: any) => {
      this.guardarStorage(respuesta.id, respuesta.token, respuesta.usuario);
      return respuesta.ok;
    }));
  }

  crearUsuario(usuario: Usuario) {
    const datosUsuario = {
      nombre: usuario.nombre,
      apellidos: usuario.apellidos,
      email: usuario.correo,
      password: usuario.password
    };
    const url = `${environment.URL_SERVICIOS}/usuario`;
    return this.http.post(url, datosUsuario).pipe(map((respuesta: any) => {
      Swal.fire('Usuario Creado', `Usuario ${usuario.correo} creado con éxito.`, 'success');
      return respuesta.usuario;
    }));
  }

  actualizarUsuario(usuario: Usuario) {

    const url = `${environment.URL_SERVICIOS}/usuario/${usuario._id}?token=${this.token}`;
    return this.http.put(url, usuario).pipe(map((respuesta: any) => {
      this.guardarStorage(usuario._id, this.token, respuesta.usuario);
      Swal.fire('Usuario Actualizado', `Usuario actualizado con éxito.`, 'success');
      return true;
    }));
  }

  guardarStorage(id: string, token: string, usuario: Usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.usuario = usuario;
    this.token = token;
  }

  cambiarImagen(archivo: File, id: string) {
    this.servicioSubirArchivo.subirArchivo(archivo, 'usuarios', id).then((resp: any) => {
      this.usuario.img = resp.usuario.img;
      this.guardarStorage(id, this.token, this.usuario);
      Swal.fire('Imagen Actualizada', 'Imagen perfil actualizada con éxito.', 'info');
    }).catch(resp => {
      console.error('Error cambiar imagen', resp);
    });
  }

  cargarUsuarios(desde: number = 0) {
    const url = `${environment.URL_SERVICIOS}/usuario?desde=${desde}`;
    return this.http.get(url).pipe(map((respuesta: any) => {
      return respuesta;
    }));
  }

  buscarUsuarios(terminoBusqueda: string) {
    const url = `${environment.URL_SERVICIOS}/busqueda/coleccion/usuarios/${terminoBusqueda}`;
    return this.http.get(url).pipe(map((respuesta: any) => {
      return respuesta.usuarios;
    }));
  }

  logout() {
    this.usuario = null;
    this.token = '';
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }

}
