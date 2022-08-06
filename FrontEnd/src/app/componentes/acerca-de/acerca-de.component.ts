import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Models/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  perfil:any = new Persona("","","","")
  
  constructor(public personaService:PersonaService) { 
  }

  
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {
      this.perfil = data;
    })

    //no actualiza la variable perfil !?!?!?!
    console.log("No actualiza la variable perfil en AcercaDeComponent.ts")
  }

  
}
