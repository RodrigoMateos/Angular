import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/Usuario';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public usuario: Usuario;

  constructor() { 
    this.usuario=new Usuario("","","","");
  }

  ngOnInit(): void {
  }
 
  onSubmit(){
    console.log("onSubmit ejecutado");
    console.log(this.usuario);
  }
  limpiarFormulario(form){
    form.reset();
  }
}
