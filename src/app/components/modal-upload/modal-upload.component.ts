import { Component, OnInit } from '@angular/core';
import { Usuario } from '@/models/usuario.model';
import Swal from 'sweetalert2';
import { SubirArchivoService } from '@/services/subir-archivo/subir-archivo.service';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html'
})
export class ModalUploadComponent implements OnInit {
  oculto = '';
  usuario: Usuario;
  imagenSubir: File;
  imagenTemp: string | ArrayBuffer;
  constructor(private subirArchivoService: SubirArchivoService) { }

  ngOnInit(): void {
  }
  subirImagen(){

  }

  seleccionImage(archivo: File) {
    if (!archivo) {
      this.imagenSubir = null;
      return;
    }
    if (archivo.type.indexOf('image/') < 0) {
      this.imagenSubir = null;
      Swal.fire('Imagen', 'Debe seleccionar un archivo que sea una imagen.', 'info');
      return;
    }
    this.imagenSubir = archivo;
    /* DUM: cargar la imagen seleccionada temporal */
    const reader = new FileReader();
    const urlImagenTempo = reader.readAsDataURL(archivo);
    reader.onloadend = () => this.imagenTemp = reader.result;
  }

}
