import { Component, OnInit } from '@angular/core';
import { Usuario } from '@/models/usuario.model';
import { UsuarioService } from '@/services/service.index';

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

}
