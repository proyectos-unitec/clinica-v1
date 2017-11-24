import { Component, OnInit } from '@angular/core';
import {Usuario} from './usuario';
import {Estatus} from './estatus'
import {UsuarioService} from './usuario.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UsuarioService]
})
export class AppComponent implements OnInit{
usuario:Usuario;
estatus:Estatus;

  constructor(private servicio:UsuarioService){

  }
  ngOnInit(): void {
 this.usuario={
   "email":"",
   "password":""
            }

 
  }

  //Metodos primer par "guardar"
  guardarUsuario(){
    return this.servicio.guardarUsuario(this.usuario).
    subscribe(estatus=>this.estatus=estatus)
  }

guardar():void{
console.log("usuario "+this.usuario.email+"password "+this.usuario.password);
  this.guardarUsuario();
  setTimeout(()=>{
    
  console.log("Usuario guardado com estatus "+this.estatus.success);
    
    },2000);


 }
}
