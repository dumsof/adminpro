import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

/* DUM: servicios */
import { UsuarioService } from '@services/service.index';
import { Usuario } from '@/models/usuario.model';
import { Router } from '@angular/router';
/* DUM: se llama la función del archivo de js/custom.js para que se cargue el menu dinamico sidebar */
declare function inicio_plugins();

@Component({
  selector: 'app-registro',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor(public usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    inicio_plugins();

    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      apellidos: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl(false),
    }, { validators: this.sonIguales('password', 'password2') });
  }

  sonIguales(dato1: string, dato2: string) {
    return (group: FormGroup) => {
      const pass1 = group.controls[dato1].value;
      const pass2 = group.controls[dato2].value;
      if (pass1 === pass2) {
        return null;
      }

      return {
        sonIguales: true
      };
    };
  }

  registrarUsuario() {
    if (this.forma.invalid) {
      return;
    }
    if (!this.forma.value.condiciones) {
      Swal.fire('Importante', 'Debe aceptar las condiciones', 'warning');
      console.log('Debe de aceptar las condiciones');
      return;
    }
    console.log(this.forma.value);

    this.usuarioService.crearUsuario(this.forma.value).subscribe(respuesta => {
      this.router.navigate(['/login']);
    });
  }

}
