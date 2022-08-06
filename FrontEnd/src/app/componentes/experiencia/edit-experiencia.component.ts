import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/Models/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: 'edit-experiencia.component.html',
  styleUrls: []
})
export class EditExperienciaComponent implements OnInit {

  expLab:Experiencia = null;

  constructor(private sExperienciaService:SExperienciaService, private activatedRouter:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperienciaService.detail(id).subscribe(
      data => {
        this.expLab = data;
      },
      err => {
        alert("Error");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];

    this.sExperienciaService.update(id, this.expLab).subscribe(
      data => {
        this.router.navigate(['/experiencia']);
        alert("Experiencia actualizada")
        console.log(this.expLab)
    },
    err => {
      alert("Error al modificar experiencia");
      this.router.navigate(['']);
    })
  }

}
