import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '@/services/usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor(public ruoter: Router, private usuarioService: UsuarioService) { }
  canActivate() {
    let permiso = false;
    permiso = this.usuarioService.estaLogueado();
    if (permiso) {
      return permiso;
    }
    this.ruoter.navigate(['/login']);
    return permiso;
  }
}
