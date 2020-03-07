import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user:any;
  public userWID:any;
  public userId:any;
  public fecha:any;

  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.userId="";
  }

  ngOnInit(): void {

    this.fecha = new Date();

    this._peticionesService.getUser().subscribe(
      result =>{
        this.user=result.data;
      },
      error =>{
        console.log("Error");
      }
    );
  }

  cargarUsuario(){
    this._peticionesService.getUserId(this.userId).subscribe(
      results =>{
        this.userId="";
        this.userWID=results;
      },
      error =>{
        this.userWID="";
        console.log("Error");
        this.userId="";
      }
    );
  }

}
