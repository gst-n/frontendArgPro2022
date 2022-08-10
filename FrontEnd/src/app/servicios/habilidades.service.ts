import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../Models/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  URL = 'http://localhost:8080/habilidades/';

  constructor(private http:HttpClient) { }


  public lista():Observable<Habilidad[]> {
    return this.http.get<Habilidad[]>(this.URL + `lista`);
  }

  public detail(id:number):Observable<Habilidad> {
    return this.http.get<Habilidad>(this.URL + `detail/${id}`);
  }

  public save(habilidad:Habilidad):Observable<any>{
    return this.http.post<Habilidad>(this.URL + `create`, habilidad);
  }

  public update(id:number, habilidad:Habilidad):Observable<any>{
    return this.http.put<any>(this.URL + `update/${id}`, habilidad);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.URL + `/delete${id}`);
  }
}


