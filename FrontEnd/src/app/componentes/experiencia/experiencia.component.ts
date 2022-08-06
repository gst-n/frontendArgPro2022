import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/Models/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: []
})
export class ExperienciaComponent implements OnInit {

  editIcon = faEdit;
  deleteIcon = faCircleXmark;

  addNuevaExperiencia:boolean = false;
  expe: Experiencia[] = [];

  isLogged = false;

  constructor(private sExperienciaService:SExperienciaService, private tokenService: TokenService) { }
  

  ngOnInit(): void {

    this.nuevaExperiencia();
    //no actualiza la variable global "experiencia!?!"

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else{
      this.isLogged = false;
    }
    
  }
  nuevaExperiencia():void {
    this.sExperienciaService.lista().subscribe(data => 
      {
        this.expe= data;
      })
    }


  toggleExperienciaButton():void{
    this.addNuevaExperiencia = !this.addNuevaExperiencia;
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperienciaService.delete(id).subscribe(
        data => {
          this.nuevaExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }


}
