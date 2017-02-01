import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class UserService {
  private url = "https://fir-apidevelop.firebaseio.com/.json";
  constructor(private _http:  Http){ 
  }
  public getDatosUsuario( ): any {
      return this._http.get(this.url).map( response =>  response.json());
   }
}
