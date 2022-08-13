import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { BotonesComponent } from './componentes/botones/botones.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { Error404Component } from './componentes/error404/error404.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NuevaEducacionComponent } from './componentes/educacion/nueva-educacion/nueva-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion/edit-educacion.component';
import { NuevoSkillComponent } from './componentes/skills/nuevo-skill/nuevo-skill.component';
import { EditSkillComponent } from './componentes/skills/edit-skill/edit-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    BotonesComponent,
    LoginComponent,
    NavbarComponent,
    ExperienciaComponent,
    SkillsComponent,
    Error404Component,
    ProyectosComponent,
    FooterComponent,
    ContactoComponent,
    NuevaExperienciaComponent,
    EditExperienciaComponent,
    EducacionComponent,
    NuevaEducacionComponent,
    EditEducacionComponent,
    NuevoSkillComponent,
    EditSkillComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
