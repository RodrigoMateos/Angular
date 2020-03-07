import { Component, OnInit } from '@angular/core';
import { ZapatillaService } from '../services/zapatilla.service';
import { Zapatilla } from '../models/Zapatilla';
@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css'],
  providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit {

  public titulo: string = "Componente zapatillas";
  public marcas: String[];
  public miMarca: String;
  public zapatillas: Array<Zapatilla>;

  constructor(private _zapatillaService: ZapatillaService) { 
    this.marcas = new Array();
    this.miMarca='';   
  }

  ngOnInit(): void {
    this.zapatillas= this._zapatillaService.getZapatillas();
    this.getMarcas();
  }

  getMarcas(){
    this.zapatillas.forEach((zapatilla, index) => {
      if(!this.marcas.includes(zapatilla.marca))
        this.marcas.push(zapatilla.marca);
    });
    console.log(this.marcas);
  }

  getMarca(){
    alert(this.miMarca);
  }
  addMarca(){
    if(!this.marcas.includes(this.miMarca))
      this.marcas.push(this.miMarca);
    this.miMarca="";
  }

  deleteMarca(indice){
    console.log("Evento invocado con el indice: "+indice);
    //delete this.marcas[indice];
    this.marcas.splice(indice, 1);
  }
}