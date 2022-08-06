import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/Models/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: []
})
export class NuevaExperienciaComponent implements OnInit {
  
  nombreE:string = '';
  descripcionE:string = '';


  constructor(private sExperiencia:SExperienciaService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const experiencia = new Experiencia(this.nombreE, this.descripcionE);
    this.sExperiencia.save(experiencia).subscribe(data=>{
      alert('Experiencia añadida');
      this.router.navigate(['/experiencia']);      
    },err => {
      alert('Algo salio mal');
      this.router.navigate(['']);
    })
  }

}
