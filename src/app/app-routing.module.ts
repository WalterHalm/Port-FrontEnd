import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './componentes/acerca-de/edit-acerca-de.component';
import { EditExperienciaComponent } from './componentes/edu-yexp/edit-experiencia.component';
import { EditeducacionComponent } from './componentes/edu-yexp/editeducacion.component';
import { NewExperienciaComponent } from './componentes/edu-yexp/new-experiencia.component';
import { NeweducacionComponent } from './componentes/edu-yexp/neweducacion.component';
import { EditSkillComponent } from './componentes/hard/edit-skill.component';
import { NewSkillComponent } from './componentes/hard/new-skill.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'nuevaexp', component:NewExperienciaComponent},
  {path:'editexp/:id', component:EditExperienciaComponent},
  {path: 'nuevaedu', component:NeweducacionComponent},
  {path:'editedu/:id', component: EditeducacionComponent},
  {path:'newskill', component:NewSkillComponent},
  {path:'editskill/:id', component:EditSkillComponent},
  {path:'editacercade/:id', component: EditAcercaDeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
