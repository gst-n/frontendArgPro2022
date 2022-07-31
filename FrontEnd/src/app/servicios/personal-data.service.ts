import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Persona } from '../Models/modelo-persona';

@Injectable({
  providedIn: 'root'
})


export class PersonalDataService {
  
  dataJson:string = '/assets/data/data.json'
  
  constructor(private http:HttpClient) { }


  getData():Observable<Persona> {
    return this.http.get<Persona>(this.dataJson);
    
  }
}
