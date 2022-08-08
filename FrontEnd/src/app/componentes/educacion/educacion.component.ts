import { Component, OnInit } from '@angular/core';

import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  deleteIcon = faCircleXmark;
  editIcon = faEdit;

  educacion:boolean[] = null;

  isLogged = false;

  constructor() { }

  ngOnInit(): void {
  }

}
