import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia:any = [
    {
      empresa: 'Rosario Hogar',
      localizacion: 'Puerto Madryn - Chubut',
      anioInicio: 2012,
      anioFin: 2015,
      ocupacion: 'Administrador de deposito'  
    },
    {
      empresa: 'Secretaria de Turismo',
      localizacion:'Puerto Madryn - Chubut',
      anioInicio: 2012,
      anioFin: 2015,
      ocupacion: 'Administrador de deposito'  
    },
    {
      empresa: 'Secretaria de Turismo',
      localizacion:'Puerto Madryn - Chubut',
      anioInicio: 2012,
      anioFin: 2015,
      ocupacion: 'Administrador de deposito'  
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
