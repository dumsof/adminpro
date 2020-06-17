import { Component, OnInit } from '@angular/core';
import { Usuario } from '@/models/usuario.model';
import Swal from 'sweetalert2';
import { SubirArchivoService } from '@/services/subir-archivo/subir-archivo.service';
import { ModalUploadService } from '@/services/service.index';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html'
})
export class ModalUploadComponent implements OnInit {
  usuario: Usuario;
  imagenSubir: File;
  imagenTemp: string | ArrayBuffer;
  constructor(private subirArchivoService: SubirArchivoService, public modalUploadService: ModalUploadService) { }

  ngOnInit(): void {
  }
  subirImagen() {
    this.subirArchivoService.subirArchivo(this.imagenSubir, this.modalUploadService.tipo, this.modalUploadService.id)
      .then(respuesta => {
        /* DUM: promesa a la cual se le emite el valor para actualizar despues que se carga una imagen */
        this.modalUploadService.notificacion.emit(respuesta);
        this.cerrarModal();
      }).catch(error => {
        console.log('Error en la carga del archivo..');
      });
  }

  cerrarModal() {
    this.imagenSubir = null;
    this.imagenTemp = null;
    this.modalUploadService.ocultarModal();
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
