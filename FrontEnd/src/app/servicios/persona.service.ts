import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../Models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = 'https://backend-gstn.herokuapp.com/personas/';

  constructor(private http:HttpClient) { }

  public getPersona(id:number): Observable<Persona>{
    return this.http.get<Persona>(this.URL + `traer/perfil/${id}`);
  }
}
