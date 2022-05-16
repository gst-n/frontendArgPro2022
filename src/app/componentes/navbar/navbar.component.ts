import { Component, OnInit } from '@angular/core';
import { faRightToBracket, faTerminal } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  login = faRightToBracket;
  terminal = faTerminal;

  constructor() { }

  ngOnInit(): void {
  }

}
