import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../Models/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {



  URL = 'https://backend-gstn.herokuapp.com/proyectos/';

  constructor(private http:HttpClient) { }


  public lista():Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(this.URL + `lista`);
  }

  public detail(id:number):Observable<Proyectos> {
    return this.http.get<Proyectos>(this.URL + `detail/${id}`);
  }

  public save(proyectos:Proyectos):Observable<Proyectos>{
    return this.http.post<Proyectos>(this.URL + `create`, proyectos);
  }

  public update(id:number, proyectos:Proyectos):Observable<any>{
    return this.http.put<any>(this.URL + `update/${id}`, proyectos);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }
}
