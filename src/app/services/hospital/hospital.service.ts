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

  constructor(private router: Router, public http: HttpClient, private servicioSubirArchivo: SubirArchivoService) { }

  cargarHospitales() { }
  obtenerHospital(id: string) { }
  borrarHospital(id: string) { }
  crearHospital(nombreHospital: string) {
    const datosHospital = {

    };
    const url = `${environment.URL_SERVICIOS}/hospital`;
    return this.http.post(url, datosHospital).pipe(map((respuesta: any) => {
      Swal.fire('Hospital Creado', `Hospital ${nombreHospital} creado con éxito.`, 'success');
      return respuesta.usuario;
    }));
  }

  buscarHospital(terminoBusqueda: string) { }
  actualizarHospital(hospital: Hospital) {

  }

}
