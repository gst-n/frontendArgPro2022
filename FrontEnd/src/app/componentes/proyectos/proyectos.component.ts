import { Component, OnInit } from '@angular/core';
import { faCircleXmark, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Proyectos } from 'src/app/Models/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: []
})
export class ProyectosComponent implements OnInit {

  constructor(private proyectoServ:ProyectosService, private tokenService:TokenService) { }

    //iconos
    deleteIcon = faCircleXmark;
    editIcon = faEdit;
    

    proyectos:Proyectos[] = [];
    addNuevoProyecto:boolean = false;
  
    
    isLogged = false;
  
    ngOnInit(): void {
      this.cargarProyecto();
      if(this.tokenService.getToken()){
        this.isLogged = true;
      }
      else {
        this.isLogged = false;
      }
    }
  
    cargarProyecto():void {
      this.proyectoServ.lista().subscribe(
        data => {
          this.proyectos = data;
          console.log(this.proyectos)
        }
      )
    }
  
    borrar(id?:number):void {
      if(id != undefined){
        this.proyectoServ.delete(id).subscribe(
          data => {
            this.cargarProyecto();
          }, error => {
            alert("no se puede eliminar")
          }
          
        )
      }
    }
  
    toggleProyectoButton():void{
      this.addNuevoProyecto = !this.addNuevoProyecto;
    }

}
