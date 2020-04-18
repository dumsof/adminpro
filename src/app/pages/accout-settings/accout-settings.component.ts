import { Component,  OnInit } from '@angular/core';

import { SettingsService } from '@services/service.index';


@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: []
})
export class AccoutSettingsComponent implements OnInit {

  constructor(public servicioSettings: SettingsService) { }

  ngOnInit(): void {
    this.colocarCheck();
  }
  cambiarColor(tema: string, link: any) {
    /* marcar el check selecionado para el color de la configuración */
    this.aplicarCheck(link);
    this.servicioSettings.aplicarTema(tema);
  }

  aplicarCheck(link: any) {
    const selectores: any = document.getElementsByClassName('selector');

    for (const selector of selectores) {
      selector.classList.remove('working');
    }
    link.classList.add('working');
  }

  /* permitir que el sistema presente el check del tema seleccionado */
  colocarCheck() {
    const selectores: any = document.getElementsByClassName('selector');
    const tema = this.servicioSettings.ajuste.tema;
    for (const selector of selectores) {
      selector.classList.remove('working');
      if (selector.getAttribute('data-theme') === tema) {
        selector.classList.add('working');
      }
    }
  }
}
