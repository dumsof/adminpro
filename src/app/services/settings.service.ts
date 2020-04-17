import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

interface Ajustes {
  temaUrl: string;
  tema: string;
}

@Injectable()

export class SettingsService {
  ajuste: Ajustes = {
    temaUrl: 'assets/css/colors/default-dark.css',
    tema: 'default-dark'
  };
  constructor(@Inject(DOCUMENT) private documento) {
    this.cargarAjustes();
  }

  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajuste));
  }

  cargarAjustes() {
    if (localStorage.getItem('ajustes')) {
      /* pasar string formato json a objeto de interfaz ajustes json.parse */
      this.ajuste = JSON.parse(localStorage.getItem('ajustes'));
      this.aplicarTema(this.ajuste.tema);
    }
  }

  aplicarTema(tema: string) {
    const url = `assets/css/colors/${tema}.css`;
    this.documento.getElementById('tema').setAttribute('href', url);
    this.ajuste.tema = tema;
    this.ajuste.temaUrl = url;
    this.guardarAjustes();
  }
}

