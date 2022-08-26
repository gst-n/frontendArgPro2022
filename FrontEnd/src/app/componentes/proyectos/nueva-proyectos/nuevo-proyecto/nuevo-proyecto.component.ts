import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/Models/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: []
})
export class NuevoProyectoComponent implements OnInit {

  nombre:string;
  descripcion:string;
  imgUrl:string;
  urlRepositorio:string;

  constructor(private proyectoServ:ProyectosService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const proyecto = new Proyectos(this.nombre, this.descripcion, this.urlRepositorio, this.imgUrl);
    this.proyectoServ.save(proyecto).subscribe(
      data => {
        alert("Proyecto agregado correctamente")
        this.router.navigate(['']);
      },err => {
        alert("algo salio mal")
        this.router.navigate(['/proyectos']);
      }
    )
  }

}
