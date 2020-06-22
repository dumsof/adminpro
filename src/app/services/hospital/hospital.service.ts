/* el httpclient se debe importar en el modulo HttpClientModule */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

/* importar modelo */
import { Hospital } from '@/models/hospital.models';
import { environment } from '@env';
import Swal from 'sweetalert2';
import { SubirArchivoService } from '@/services/subir-archivo/subir-archivo.service';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  token: string;
  constructor(private router: Router, public http: HttpClient, private servicioSubirArchivo: SubirArchivoService) { this.cargarStore() }

  cargarStore() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    } else {
      this.token = '';
    }
  }

  cargarHospitales() {
    const url = `${environment.URL_SERVICIOS}/hospital`;
    return this.http.get(url).pipe(map((respuesta: any) => {
      return respuesta;
    }));
  }

  obtenerHospital(id: string) {
    const url = `${environment.URL_SERVICIOS}/hospital/${id}?token=${this.token}`;
    return this.http.get(url).pipe(map((respuesta: any) => {
      return respuesta;
    }));
  }

  borrarHospital(id: string) {
    const url = `${environment.URL_SERVICIOS}/hospital/${id}?token=${this.token}`;
    return this.http.delete(url).pipe(map((respuesta: any) => {
      return respuesta;
    }));
  }

  crearHospital(nombreHospital: string) {
    const datosHospital = {
      nombre: nombreHospital
    };
    const url = `${environment.URL_SERVICIOS}/hospital?token=${this.token}`;
    return this.http.post(url, { nombre: nombreHospital }).pipe(map((respuesta: any) => {
      Swal.fire('Hospital Creado', `Hospital ${nombreHospital} creado con éxito.`, 'success');
      return respuesta.usuario;
    }));
  }

  buscarHospital(terminoBusqueda: string) {
    const url = `${environment.URL_SERVICIOS}/busqueda/coleccion/hospitales/${terminoBusqueda}`;
    return this.http.get(url).pipe(map((respuesta: any) => {
      return respuesta.hospitales;
    }));
  }
  actualizarHospital(hospital: Hospital) {
    const url = `${environment.URL_SERVICIOS}/hospital/${hospital._id}?token=${this.token}`;
    return this.http.put(url, hospital).pipe(map((respuesta: any) => {
      Swal.fire('Hospital Actualizado', `Hospital actualizado con éxito.`, 'success');
      return true;
    }));
  }

}
