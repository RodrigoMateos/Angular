import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Configuracion } from '../models/configuracion';

@Component({
  selector: 'app-videojuego',
  templateUrl: './videojuego.component.html',
  styleUrls: ['./videojuego.component.css']
})
export class VideojuegoComponent implements OnInit , DoCheck, OnDestroy{
  
  public titulo: String;
  public listado: String;
  public mostrar_videojuegos: boolean;
  public config;

  constructor() { 
    this.config=Configuracion;
    this.titulo="COMPONENTE DE VIDEOJUEGOS";
    this.listado="Listado de los videojuegos punteros";
    console.log("Se ha cargado el comonente videojuego");
    this.mostrar_videojuegos=false;
  }

  ngOnInit(): void {
    console.log("On Init ejecutado");
  }

  ngDoCheck(){
    console.log("Do check ejecutado");
  }

  ngOnDestroy(){
    console.log("On Destroy ejecutado");
  }

  cambiarTitulo(){
    this.titulo = "Titulo ya cambiado en el componente Videojuego";
  }

  ocultarVideojuegos(){
    if (this.mostrar_videojuegos)
      this.mostrar_videojuegos=false;
    else
      this.mostrar_videojuegos=true;
  }

}
