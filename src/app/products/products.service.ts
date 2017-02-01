import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
@Injectable()
export class UserService {
 constructor(private _http:  Http){ 
  }
  private url = "https://dtt-rest-api.firebaseio.com/.json";
  public getDatosUsuario( ): any {
      return this._http.get(this.url)
                           .map(response =>  response.json());
   }
  /*public pushObject(data){ 
      const body =  JSON.stringify(data);
      const headers = new Headers({
             'Content-Type':'application/json'
      });
      return this._http.post("https://fir-apidevelop.firebaseio.com/users.json",body,{ headers: headers});
  }*/
}
