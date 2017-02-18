import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, Response } from '@angular/http';
import { Producto , Departamento ,departamentosQuerySet } from '../products';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductsService { 
 url = "https://ngdevapi.firebaseio.com/productos/.json";
 api = "https://dtt-rest-api.firebaseio.com/.json";
 constructor(private _http:  Http){ }
  public getProducts(filter?): Observable<Producto[]> {
   return  filter ?  this.getProducts().map(lol=> lol.filter(lol => lol.departamento === filter)) : this._http.get(this.url).map(response =>  response.json());
  }
  public getProductPerRoute(id: number) : Observable<Producto>{ 
    return this.getProducts()
                .map((producto: Producto[]) => producto.find(producto => producto.id === id));
  }
  public sendDataToServer(hero): Observable<Producto> { 
        const body = JSON.stringify(hero);
        const headers = new Headers({ });
        headers.append('Content-Type', 'application/json');
        return this._http.post(this.api,body,{ headers: headers}).map((data: Response) => data.json());
  } 
}