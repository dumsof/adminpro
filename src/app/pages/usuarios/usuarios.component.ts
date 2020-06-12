import { Component, OnInit } from '@angular/core';
import { Usuario } from '@/models/usuario.model';
import { UsuarioService } from '@/services/service.index';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  desde = 0;
  totalRegistro = 0;
  cargando = true;
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.cargando = true;
    this.usuarioService.cargarUsuarios(this.desde).subscribe(respuesta => {
      this.totalRegistro = respuesta.total;
      this.usuarios = respuesta.usuarios;
      this.cargando = false;
    });

  }

  cambiarDesde(valor: number) {
    const desde = this.desde + valor;
    if (desde >= 0 && desde <= this.totalRegistro) {
      this.desde += valor;
      this.cargarUsuarios();
    }
  }

  buscarUsuario(terminoBusqueda: string) {
    if (terminoBusqueda.length <= 0) {
      this.cargarUsuarios();
      return;
    }
    this.cargando = true;
    this.usuarioService.buscarUsuarios(terminoBusqueda).subscribe((usuario: Usuario[]) => {
      this.usuarios = usuario;
      this.cargando = false;
    });
  }

  borrarUsuario(usuario: Usuario) {
    if (usuario._id === this.usuarioService.usuario._id) {
      Swal.fire('No puede borrar usuario', 'No puede borrar el usuario con el que esta logueado.', 'info');
      return;
    }
    Swal.fire({
      title: '¿Esta seguro?',
      text: `Esta a punto de borrar a ${usuario.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Borrar',
      cancelButtonText: 'No, Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.usuarioService.borrarUsuario(usuario._id).subscribe(respuesta => {
          if (respuesta.ok) {
            this.cargarUsuarios();
            Swal.fire('Información Borrada', 'Información borrada con exito.', 'success');
          }
        });
      }
    });
  }

  guardarUsuario(usuario: Usuario) {
    this.usuarioService.actualizarUsuario(usuario).subscribe(respuesta => this.cargarUsuarios());
  }
}
