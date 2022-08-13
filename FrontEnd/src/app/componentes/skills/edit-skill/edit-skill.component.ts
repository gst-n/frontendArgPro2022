import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/Models/habilidad';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  constructor(private habilidadService:HabilidadesService, private activatedRouter:ActivatedRoute, private router:Router) { }

  habilidad:Habilidad = null;

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadService.detail(id).subscribe(
      data => {
        this.habilidad = data;
      }, error => {
        alert("Error al modificar!");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadService.update(id, this.habilidad).subscribe(
      data => {
        this.router.navigate(['']);
      }, error => {
        alert("Algo salio mal al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }

}
