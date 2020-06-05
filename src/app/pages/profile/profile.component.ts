import { Component, OnInit } from '@angular/core';
import { Usuario } from '@/models/usuario.model';
import { UsuarioService } from '@/services/service.index';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  usuario: Usuario;
  imagenSubir: File;
  constructor(private servicioUsuario: UsuarioService) { }

  ngOnInit(): void {
    this.usuario = this.servicioUsuario.usuario;
  }

  guardar(usuario: Usuario) {
    this.usuario.nombre = usuario.nombre;
    this.usuario.apellidos = usuario.apellidos;
    if (!this.usuario.google) {
      this.usuario.email = usuario.email;
    }

    this.servicioUsuario.actualizarUsuario(this.usuario).subscribe(respuesta => {
      console.log('respuesta actualizar usuario', respuesta);
    });
  }

  seleccionImage(archivo: File) {
    if (!archivo) {
      return;
    }
    if (archivo.type.indexOf('image/') < 0) {
      Swal.fire('Imagen', 'Debe seleccionar un archivo que sea una imagen.', 'info');
      return;
    }
    console.log('Evento:', archivo);
    this.imagenSubir = archivo;
  }

  cambiarImagen() {
    if (!this.imagenSubir) {
      Swal.fire('No Existe Imagen', 'Debe seleccionar la imagen que desea subir.', 'info');
      return;
    }
    console.log('1 jkdjkdjk');
    this.servicioUsuario.cambiarImagen(this.imagenSubir, this.usuario._id);
  }

}
