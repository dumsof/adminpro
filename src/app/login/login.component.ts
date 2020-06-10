import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '@/services/service.index';
import Swal from 'sweetalert2';

/* DUM: se llama la función del archivo de js/custom.js para que se cargue el menu dinamico sidebar */
declare function inicio_plugins();
/* DUM: libreria de google se hace referencia en el index.html*/
declare const gapi: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  correo = '';
  recuerdame = false;
  auth2: any;
  constructor(public ruoter: Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    inicio_plugins();
    this.googleInit();
    this.correo = localStorage.getItem('email') || '';
    if (this.correo.length > 0) {
      this.recuerdame = true;
    }
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '261803787485-9d77fs26rb1j6s2nd800t92bqm2t73mj.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSigning(document.getElementById('btnGoogle'));
    });
  }

  attachSigning(element) {
    this.auth2.attachClickHandler(element, {}, googleUser => {
      /*  const profile = googleUser.getBasicProfile(); */
      const token = googleUser.getAuthResponse().id_token;
      this.usuarioService.loginGoogle(token)
        .subscribe(respuesta => window.location.href = '#/dashboard'
          , error => Swal.fire('Usuario no Éxiste', `El usuario o contraseña son invalidos.`, 'info'));
    });
  }

  ingresar(formulario: NgForm) {
    if (!formulario.valid) {
      return;
    }
    this.usuarioService.login(formulario.value, formulario.value.recuerdame)
      .subscribe(respuesta => this.ruoter.navigate(['/dashboard'])
        , error => Swal.fire('Usuario no Éxiste', `El usuario o contraseña son invalidos.`, 'info'));
  }

}
