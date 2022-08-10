import { Component, OnInit } from '@angular/core';

import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Educacion } from 'src/app/Models/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  //iconos
  deleteIcon = faCircleXmark;
  editIcon = faEdit;
  //modelo
  educacion:Educacion[] = [];
  addNuevaExperiencia:boolean = false;
  
  constructor(private educacionS:EducacionService, private tokenService:TokenService) { }
  
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else {
      this.isLogged = false;
    }
  }

  cargarEducacion():void {
    this.educacionS.lista().subscribe(
      data => {
        this.educacion = data;
      }
    )
  }

  borrar(id?:number):void {
    if(id != undefined){
      this.educacionS.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, error => {
          alert("no se puede eliminar")
        }
        
      )
    }
  }

  toggleExperienciaButton():void{
    this.addNuevaExperiencia = !this.addNuevaExperiencia;
  }
}
