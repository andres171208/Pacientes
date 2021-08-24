import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { ApiService } from '../../servicios/api/api.service';
import { PacienteI } from '../../modelos/paciente.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private activedRouter: ActivatedRoute, private router: Router, private api: ApiService) { }

  datosPaciente : PacienteI;

  editarForm = new FormGroup({

  nombre: new FormControl(''),
  dni : new FormControl(''),
  correo: new FormControl(''),
  codigoPosta: new FormControl(''),
  genero: new FormControl(''),
  direccion: new FormControl(''),
  telefono: new FormControl(''),
  fechaNacimiento : new FormControl(''),
  token : new FormControl(''),
  pacienteId : new FormControl(''),
  });

  ngOnInit(): void {

    let pacienteId = this.activedRouter.snapshot.paramMap.get('id');
    let token = this.getToken();

    this.api.getSinglePatient(pacienteId).subscribe(
      data=>{
        this.datosPaciente = data;
        console.log(this.datosPaciente);
        this.editarForm.patchValue({
          nombre : this.datosPaciente.Nombre
        });
  })
  }




  getToken(){
    return localStorage.getItem('token');
  }

}
