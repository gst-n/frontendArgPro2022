import { Component, OnInit } from '@angular/core';
import { PersonalDataService } from 'src/app/servicios/personal-data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  //de la funcion showSkills()
  mostrarSkills:boolean = false;
  habilidadesDuras:string[] = ["HTML", "CSS", "JavaScript", "TypeScript", "Bootstrap", "GIT", "Tailwind CSS", "Angular", "SQL", "Ingles"];

  //en estas constantes se guardan los valores que traigo a traves del servicio
  hardSk:any = [];
  softSk:any = [];

  constructor(private data:PersonalDataService) { }

  ngOnInit(): void {

    this.data.getData().subscribe((data:any) => {
      this.hardSk = data.hardSkills
    })

    this.data.getData().subscribe((data:any)=> {
      this.softSk = data.softSkills
    })
  }

  showSkill(){
    //Muestra el listado de habilidades Duras
    this.mostrarSkills = !this.mostrarSkills;
  }



}
