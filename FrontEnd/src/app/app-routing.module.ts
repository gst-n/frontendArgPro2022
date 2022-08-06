import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { Error404Component } from './componentes/error404/error404.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { FooterComponent } from './componentes/footer/footer.component';
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
    path: 'editExperiencia/:id', 
    component: EditExperienciaComponent
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
    path: 'footer', 
    component: FooterComponent
  },
  {
    path: 'contacto', 
    component: ContactoComponent
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
