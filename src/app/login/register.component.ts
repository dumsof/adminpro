import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/* DUM: se llama la función del archivo de js/custom.js para que se cargue el menu dinamico sidebar */
declare function inicio_plugins();

@Component({
  selector: 'app-registro',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  format: FormGroup;

  constructor() { }

  ngOnInit(): void {
    inicio_plugins();

    this.format = new FormGroup({
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
    if (this.format.invalid) {
      return;
    }
    if (!this.format.value.condiciones) {
      console.log('Debe de aceptar las condiciones');
      return;
    }
    console.log(this.format.value);
  }

}
