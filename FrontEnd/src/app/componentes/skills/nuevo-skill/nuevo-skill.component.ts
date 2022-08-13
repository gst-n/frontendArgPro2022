import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/Models/habilidad';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-nuevo-skill',
  templateUrl: './nuevo-skill.component.html',
  styleUrls: ['./nuevo-skill.component.css']
})
export class NuevoSkillComponent implements OnInit {


  nombre:string = '';
  tipo:string = '';
  porcentajeH:number = 0;

  constructor(private habilidadService:HabilidadesService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{

    const nuevaHabilidad = new Habilidad(this.nombre,this.tipo,this.porcentajeH);

    this.habilidadService.save(nuevaHabilidad).subscribe({
        next: data=>{
        alert('habilidad añadida');
        this.router.navigate(['']);      
      },
        error: err => {
        alert('Algo salio mal');
        this.router.navigate(['']);
      }
    })
  }
}

