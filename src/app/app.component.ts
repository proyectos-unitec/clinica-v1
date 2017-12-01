import { Component, OnInit } from '@angular/core';
import {Usuario} from './usuario';
import {Estatus} from './estatus'
import {HttpClient, HttpHeaders} from '@angular/common/http'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit{
usuario:Usuario;
estatus:Estatus;

  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
 this.usuario={}
 this.estatus={}
  }
  

guardar():void{

  this.http.post<Estatus>('http://tesis-unitec.herokuapp.com/api/usuario',
  this.usuario,{headers:new HttpHeaders().set("Content-Type","application/json")})
  .subscribe(datos=>{this.estatus=datos})
  setTimeout(()=>{
    
  console.log("Usuario guardado com estatus "+this.estatus.success);
    
    },2000)


 }
}
