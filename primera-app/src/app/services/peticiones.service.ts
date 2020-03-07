import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PeticionesService {
  public url: String;

  constructor(
    public _http: HttpClient
  ) { 
    this.url="https://reqres.in/";
  }

  getUser(): Observable<any>{
    return this._http.get(this.url+'api/users/'+this.getNum());
  }

  getNum(){
    return Math.floor((Math.random() * 10) + 1);
  }

  getUserId(userId){
    return this._http.get(this.url+'api/users/'+userId);
  }

}