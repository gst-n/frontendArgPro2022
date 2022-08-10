import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Models/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  perfil:Persona = new Persona("","","","")
  
  constructor(public personaService:PersonaService) { }

  
    ngOnInit(): void {
      this.personaService.getPersona().subscribe({
         next: (data:Persona) => 
         {
          this.perfil = data;
          console.log(this.perfil)
         }
        })
      }
  }