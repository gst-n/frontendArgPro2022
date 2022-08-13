import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion/edit-educacion.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NuevaEducacionComponent } from './componentes/educacion/nueva-educacion/nueva-educacion.component';
import { Error404Component } from './componentes/error404/error404.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { EditSkillComponent } from './componentes/skills/edit-skill/edit-skill.component';
import { NuevoSkillComponent } from './componentes/skills/nuevo-skill/nuevo-skill.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { GuardSeguridadGuard } from './guard-seguridad.guard';

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
    component: EditExperienciaComponent,
    canActivate: [GuardSeguridadGuard]
  },
  {
    path: 'educacion', 
    component: EducacionComponent
  },
  {
    path: 'editEducacion/:id', 
    component: EditEducacionComponent,
    canActivate: [GuardSeguridadGuard]
  },
  {
    path: 'skills', 
    component: SkillsComponent
  },
  {
    path: 'nuevoSkill',
    component: NuevoSkillComponent
  },
  {
    path: 'editSkill/:id',
    component: EditSkillComponent,
    canActivate: [GuardSeguridadGuard]
  },
  {
    path: 'nuevaeducacion', 
    component: NuevaEducacionComponent
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
