import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/Models/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: []
})
export class EditProyectosComponent implements OnInit {
  proyecto:Proyectos = null;
   

  constructor(private proyectoServ:ProyectosService, private activatedRouter:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoServ.detail(id).subscribe(
      data => {
        this.proyecto = data;
      }, error => {
        alert("Error al modificar!");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoServ.update(id, this.proyecto).subscribe(
      data => {
        this.router.navigate(['']);
      }, error => {
        alert("Algo salio mal al modificar el Proyecto");
        this.router.navigate(['']);
      }
    )
  }
}
