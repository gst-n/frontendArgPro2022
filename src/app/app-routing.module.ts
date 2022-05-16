import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './componentes/error404/error404.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SkillsComponent } from './componentes/skills/skills.component';

const routes: Routes = [
  {
    path:'',
    component: HeaderComponent
  },
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'experiencia', 
    component: ExperienciaComponent
  },
  {
    path: 'skills', 
    component: SkillsComponent
  },
  {
    path: 'proyectos', 
    component: ProyectosComponent
  },
  {
    path: '**', 
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
