import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//inicio servicios
import {CargarScriptService} from "./cargar-script.service";

//fin servicios

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EduYexpComponent } from './componentes/edu-yexp/edu-yexp.component';
import { HardComponent } from './componentes/hard/hard.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewExperienciaComponent } from './componentes/edu-yexp/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/edu-yexp/edit-experiencia.component';
import { NeweducacionComponent } from './componentes/edu-yexp/neweducacion.component';
import { EditeducacionComponent } from './componentes/edu-yexp/editeducacion.component';
import { EditSkillComponent } from './componentes/hard/edit-skill.component';
import { NewSkillComponent } from './componentes/hard/new-skill.component'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    EduYexpComponent,
    HardComponent,
    ProyectosComponent,
    ContactoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillComponent,
    NewSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    CargarScriptService], 
  
  bootstrap: [AppComponent]
})
export class AppModule { }
