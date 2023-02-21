import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { Experiencia } from 'src/app/model/experiencia';
import { EducacionService } from 'src/app/service/educacion.service';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-edu-yexp',
  templateUrl: './edu-yexp.component.html',
  styleUrls: ['./edu-yexp.component.css']
})
export class EduYexpComponent implements OnInit {
  expe: Experiencia[] = [];
  educacion:Educacion [] = [];

constructor(private sExperiencia : SExperienciaService, private tokenService: TokenService, private educacionS : EducacionService){}

isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    } else{
      this.isLogged=false;
    }
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void{
    this.sExperiencia.list().subscribe(
      data => this.expe= data)
  }

  borrar(id?: number){
    if (id!=undefined){
      this.educacionS.delete(id).subscribe(
        data =>{
          this.cargarEducacion();
        }, err =>{
          alert("No se pudo eliminar educacion")
        }
      )
    }
  }

  cargarEducacion(): void{
    this.educacionS.list().subscribe(
      data =>{
        this.educacion = data;
      }
    )
  }

  delete(id?:number){
    if (id != undefined){
        this.sExperiencia.delete(id).subscribe(
          data =>{
            this.cargarExperiencia();
          }, err =>{
            alert("Error al eliminar Experiencia")
          }
        )
    }
  }
}
