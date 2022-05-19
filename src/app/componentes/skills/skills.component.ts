import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  softSkills = ["Asertividad", "Perseverancia", "Comunicación", "Trabajo en equipo"]

  constructor() { }

  ngOnInit(): void {
  }




}
