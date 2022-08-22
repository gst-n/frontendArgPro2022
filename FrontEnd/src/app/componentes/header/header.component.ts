import { Component, OnInit } from '@angular/core';

import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { Persona } from 'src/app/Models/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  login = faRightToBracket;
  terminal = faTerminal;
  persona:Persona = new Persona('','','','');

  constructor( private personaService:PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona(1).subscribe({
      next: (data:Persona) => 
      {
       this.persona = data;
      }
     })
   

  }

}
