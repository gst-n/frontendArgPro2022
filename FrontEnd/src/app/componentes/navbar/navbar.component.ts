import { Component, OnInit } from '@angular/core';
import { faRightToBracket, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { Persona } from 'src/app/Models/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  login = faRightToBracket;
  terminal = faTerminal;

  persona:Persona = new Persona("", "", "");

  constructor(public personaService:PersonaService) { }

  ngOnInit(): void {
      this.personaService.getPersona().subscribe(data => {
      this.persona = data
    })
  }

}
