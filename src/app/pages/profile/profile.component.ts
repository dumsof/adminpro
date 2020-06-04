import { Component, OnInit } from '@angular/core';
import { Usuario } from '@/models/usuario.model';
import { UsuarioService } from '@/services/service.index';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  usuario: Usuario;
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

}
