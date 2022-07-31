import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/Models/new-experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  login:boolean = true;

  experiencia:Experiencia[] = [
    {
      id:0,
      empresa: 'Rosario Hogar',
      locacion: 'Puerto Madryn - Chubut',
      anio: 2012,
      cargo: 'Administrador de deposito'  
    },
    {
      id:1,
      empresa: 'Secretaria de Turismo',
      locacion:'Puerto Madryn - Chubut',
      anio: 2016,
      cargo: 'Informante Turístico'  
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
