import { Component, OnInit } from '@angular/core';
import { faRightToBracket, faTerminal } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = faRightToBracket;
  terminal = faTerminal;

  constructor() { }

  ngOnInit(): void {
  }

}
