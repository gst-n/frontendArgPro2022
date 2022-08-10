import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/Models/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css']
})
export class NuevaEducacionComponent implements OnInit {
  nombreE:string;
  descripcionE:string;

  constructor(private educacionS:EducacionService, private router:Router) { }

  
  ngOnInit(): void {
  }

  onCreate():void{
    const educacion = new Educacion(this.nombreE, this.descripcionE);
    this.educacionS.save(educacion).subscribe(
      data => {
        alert("Educacion agregada correctamente")
        this.router.navigate(['']);
      },err => {
        alert("algo salio mal")
        this.router.navigate(['/educacion']);
      }
    )
  }
  

}