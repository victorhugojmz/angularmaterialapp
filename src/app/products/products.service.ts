import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Producto , Departamento } from '../products';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductsService { 
 private url = "https://dtt-rest-api.firebaseio.com/.json";
 constructor(private _http:  Http){ }
  public getProducts(): Observable<Producto[]> {
      return this._http.get(this.url)
                       .map(response =>  response.json());
  }
  public getProduct(id) : Observable<Producto>{ 
     return this.getProducts()
                .map((producto: Producto[]) => producto.find(producto => producto.id === id));
  }
}