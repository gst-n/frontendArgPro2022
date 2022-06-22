import { Component, OnInit } from '@angular/core';
import { PersonalDataService } from 'src/app/servicios/personal-data.service';
import { IProgress } from './IProgress';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  mostrarSkills:boolean = false;
  habilidadesDuras:string[] = ["HTML", "CSS", "JavaScript", "TypeScript", "Bootstrap", "GIT", "Tailwind CSS", "Angular", "SQL", "Ingles"];
  
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
    this.mostrarSkills = !this.mostrarSkills;
  }



}
