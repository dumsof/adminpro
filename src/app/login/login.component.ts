import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '@/services/service.index';
import Swal from 'sweetalert2';

/* DUM: se llama la función del archivo de js/custom.js para que se cargue el menu dinamico sidebar */
declare function inicio_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  correo = '';
  recuerdame = false;
  constructor(public ruoter: Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    inicio_plugins();
    this.correo = localStorage.getItem('email') || '';
    if (this.correo.length > 0) {
      this.recuerdame = true;
    }

  }

  ingresar(formulario: NgForm) {
    if (!formulario.valid) {
      return;
    }

    console.log(formulario.valid, formulario.value.email);

    this.usuarioService.login(formulario.value, formulario.value.recuerdame)
      .subscribe(respuesta => this.ruoter.navigate(['/dashboard'])
        , error => Swal.fire('Usuario no Éxiste', `El usuario o contraseña son invalidos, por favor verifique`, 'info'));
  }

}
