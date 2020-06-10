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
  imagenTemp: string | ArrayBuffer;
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

    this.servicioUsuario.actualizarUsuario(this.usuario).subscribe();
  }

  seleccionImage(archivo: File) {
    if (!archivo) {
      this.imagenSubir = null;
      return;
    }
    if (archivo.type.indexOf('image/') < 0) {
      this.imagenSubir = null;
      Swal.fire('Imagen', 'Debe seleccionar un archivo que sea una imagen.', 'info');
      return;
    }   
    this.imagenSubir = archivo;
    /* DUM: cargar la imagen seleccionada temporal */
    const reader = new FileReader();
    const urlImagenTempo = reader.readAsDataURL(archivo);
    reader.onloadend = () => this.imagenTemp = reader.result;
  }

  cambiarImagen() {
    if (!this.imagenSubir) {
      Swal.fire('No Existe Imagen', 'Debe seleccionar la imagen que desea subir.', 'info');
      return;
    }   
    this.servicioUsuario.cambiarImagen(this.imagenSubir, this.usuario._id);
  }

}
