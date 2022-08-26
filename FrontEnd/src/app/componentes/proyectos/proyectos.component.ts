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

    // proyectosPrueba:Proyectos[] = [
      
    //   {
    //     nombre: "portfolio",
    //     descripcion: "portfoliowebbb",
    //     imgUrl: "https://i.postimg.cc/6Q9fS8DS/portfolio-web.png",
    //     urlRepositorio: "asdhaksdaksjdhaksjdhas"
    //   },
    //   {
    //     nombre: "poke app",
    //     descripcion: "pokemones",
    //     imgUrl: "https://i.postimg.cc/Dz8PF9wd/poke-App-1.png",
    //     urlRepositorio: "asdhaksdaksjdhaksjdhas"
    //   },
    //   {
    //     nombre: "clima app",
    //     descripcion: "elclimapiola",
    //     imgUrl: "https://i.postimg.cc/mrY2cDkb/Weather-app.png",
    //     urlRepositorio: "asdhaksdaksjdhaksjdhas"
    //   },
    //   {
    //     nombre: "cronometro",
    //     descripcion: "cronometro malo",
    //     imgUrl: "981379128alskdjasdlkajsd",
    //     urlRepositorio: "https://i.postimg.cc/zv99SC24/Cronometro-Argentina-Programa.png"
    //   },
    // ]
    //iconos
    deleteIcon = faCircleXmark;
    editIcon = faEdit;
    //modelo
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
