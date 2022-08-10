import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Habilidad } from 'src/app/Models/habilidad';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  listaHabilidades:Habilidad[] = [];
  
  constructor(private habilidadService:HabilidadesService, private tokenService:TokenService) { }

  isLogged = false;
  toggleSkill:boolean = false;

  ngOnInit(): void {
    this.nuevaHabilidad();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else{
      this.isLogged = false;
    }
  }


  nuevaHabilidad():void {
    this.habilidadService.lista().subscribe({
      next: (data:Habilidad[]) => {
        this.listaHabilidades = data;
        console.log(this.listaHabilidades)
      },
      error: (err => {
        console.error("Algo salio mal");
      })
    })
  }

  toggleCreateSkill():void {
    this.toggleSkill = !this.toggleSkill;
  }

}
