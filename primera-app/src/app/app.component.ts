import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: String;
  public descripcion: String;

  constructor(){
    this.title=Configuracion.titulo;
    this.descripcion=Configuracion.descripcion;
  }
}