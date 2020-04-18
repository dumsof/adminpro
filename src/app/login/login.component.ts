import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/* DUM: se llama la función del archivo de js/custom.js para que se cargue el menu dinamico sidebar */
declare function inicio_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public ruoter: Router) { }

  ngOnInit(): void {
    inicio_plugins();
  }

  ingresar() {
    console.log('ingresando');
    this.ruoter.navigate(['/dashboard']);

  }

}
