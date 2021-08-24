import { Injectable } from '@angular/core';
import {LoginI} from '../../modelos/login.interface';
import {ResponseI} from '../../modelos/response.interface';
import { ListaPacientesI } from '../../modelos/listapacientes.interface';
import { PacienteI } from 'src/app/modelos/paciente.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { observable, Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "http://198.58.117.73/apirest/";
  constructor( private http:HttpClient) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "auth";
    return this.http.post<ResponseI>(direccion,form);
  }

  gettAllPatients(page:number):Observable<ListaPacientesI[]>{
    let direccion =  this.url + "pacientes?page="+page;
    return this.http.get<ListaPacientesI[]>(direccion);
  }

  getSinglePatient(id:any):Observable<PacienteI>{
    let direccion = this.url + "pacientes?id="+id;
    return this.http.get<PacienteI>(direccion);
  }

}
