import { Component, OnInit } from '@angular/core';
import { PersonalDataService } from 'src/app/servicios/personal-data.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  // acercaDe:any = [
  //   {
  //     acercaMio: ` Mi nombre es Gastón, tengo 29 años y actualmente me encuentro trabajando y 
  //     estudiando en Puerto Madryn - Chubut. Mis intereses generales son las nuevas(y no tan nuevas) tecnologias, 
  //     la fotografia, la musica, y los viajes.
  //     Si quieres conocer mas sobre mi y mi forma de trabajo, te invito a que me dejes un mensaje por alguna de mis redes sociales.
  //     `
  //   },
  //   {
  //     aboutMe: ` Hello stranger!, my name is Gastón, i'm 29 years old and i'm actually living in Puerto Madryn - Chubut. 
  //     My main interests are new technologies, photography, music, and traveling.
  //     If you want to have a chat, i invited you to leave me a message on my social media.`
  //   }
  // ];


  constructor(private personalData:PersonalDataService) { }
  
  datita:any = "";
  lenguaje:boolean = true;


  ngOnInit(): void {
    this.personalData.getData()
    .subscribe( (data)=>{
      this.datita = data;
      console.table(this.datita)
    }

    )
  }


  toggleLenguage():void {
    this.lenguaje = !this.lenguaje;
  }

}
