import { Component, OnInit } from '@angular/core';
import { Hospital } from '@/models/hospital.models';
import { HospitalService, ModalUploadService } from '@/services/service.index';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: []
})
export class HospitalesComponent implements OnInit {

  hospitales: Hospital[] = [];
  desde = 0;
  totalRegistro = 0;
  cargando = true;
  constructor(private hospitalService: HospitalService, private modalUploadService: ModalUploadService) { }

  ngOnInit(): void {
    this.cargarHospitales();
    /* DUM: se suscribe para que se ejecute cuando cambia la notificacion o emite algo */
    this.modalUploadService.notificacion.subscribe(respuesta => {
      this.cargarHospitales();
    });
  }

  cargarHospitales() {
    this.cargando = true;
    this.hospitalService.cargarHospitales().subscribe(respuesta => {
      this.totalRegistro = respuesta.total;
      this.hospitales = respuesta.hospitales;
      this.cargando = false;
    });

  }

  cambiarDesde(valor: number) {
    const desde = this.desde + valor;
    if (desde >= 0 && desde <= this.totalRegistro) {
      this.desde += valor;
      this.cargarHospitales();
    }
  }

  buscarHospital(terminoBusqueda: string) {
    if (terminoBusqueda.length <= 0) {
      this.cargarHospitales();
      return;
    }
    this.cargando = true;
    this.hospitalService.buscarHospital(terminoBusqueda).subscribe((hospital: Hospital[]) => {
      this.hospitales = hospital;
      this.cargando = false;
    });
  }

  borrarHospital(hospital: Hospital) {
    Swal.fire({
      title: '¿Esta seguro?',
      text: `Esta a punto de borrar a ${hospital.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Borrar',
      cancelButtonText: 'No, Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.hospitalService.borrarHospital(hospital._id).subscribe(respuesta => {
          if (respuesta.ok) {
            this.cargarHospitales();
            Swal.fire('Información Borrada', 'Información borrada con exito.', 'success');
          }
        });
      }
    });
  }

  guardarHospital(hospital: Hospital) {
    this.hospitalService.actualizarHospital(hospital).subscribe(respuesta => this.cargarHospitales());
  }

  mostrarModal(id: string) {
    this.modalUploadService.mostrarModal('hospitales', id);
  }

  crearHospital() {
    Swal.fire({
      title: 'Nombre Hospital',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      showLoaderOnConfirm: true
    }).then((result) => {
      if (!result.value) {
        Swal.showValidationMessage(
          `Diligencie Nombre hospital`
        );
        return;
      }
      console.log(result.value);
      this.hospitalService.crearHospital(result.value).subscribe(respuesta => this.cargarHospitales());
    });
  }

}
