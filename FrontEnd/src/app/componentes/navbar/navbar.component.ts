import { Component, OnInit } from '@angular/core';
import { faRightToBracket, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { Persona } from 'src/app/Models/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogged = false;

  loginIco = faRightToBracket;
  terminalIco = faTerminal;

  persona:Persona = new Persona("", "", "","");

  constructor(public personaService:PersonaService, private tokenService:TokenService) { }

  ngOnInit(): void {

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else {
      this.isLogged = false;
    }
  }

  logOut():void {
    this.tokenService.logOut();
    window.location.reload();
  }
}
