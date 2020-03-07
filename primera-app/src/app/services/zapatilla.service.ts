import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/Zapatilla';

@Injectable({
  providedIn: 'root'
})
export class ZapatillaService {
  public zapatillas: Array<Zapatilla>;

  constructor( ) {
    this.zapatillas = [
      new Zapatilla('Air Max', 'NIKE', 'Azul', 115, true),
      new Zapatilla('Reebook Classic', 'Reebook', 'Blancas', 65, true),
      new Zapatilla('Adidas Classic', 'Adidas', 'Blancas', 75, true),
      new Zapatilla('Original', 'Converse', 'Blancas', 90, false),
      new Zapatilla('Air Jordan', 'NIKE', 'Rojas', 150, true),
      new Zapatilla('NB-750', 'New Balance', 'Negras', 80, true),
      new Zapatilla('Predator', 'Adidas', 'Amarillas', 100, false)
    ];
   }

   getTexto(){
     return "Hola mundo desde un servicio";
   }

   getZapatillas(): Array<Zapatilla>{
      return this.zapatillas;
   }

}
