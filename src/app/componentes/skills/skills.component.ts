import { Component, OnInit } from '@angular/core';
import { PersonalDataService } from 'src/app/servicios/personal-data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  softSkills = ["Asertividad", "Perseverancia", "Comunicación", "Trabajo en equipo"];
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



}
