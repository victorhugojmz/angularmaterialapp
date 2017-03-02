import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, Response } from '@angular/http';
import { Producto , Departamento ,departamentosQuerySet } from '../products';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductsService { 
 private url = "https://productos-e9bd9.firebaseio.com/";
 private l = "https://lolapi-9b8ee.firebaseio.com/";
 private departamentosQuerySet: Departamento[];
 constructor(private _http:  Http){ }
  public getProducts(_hasfilter?: string): Observable<Producto[]> {
   return _hasfilter ? this._http.get(this.url + _hasfilter + '/.json').map(response =>  response.json()) : this._http.get(this.url + 'Clothing/.json').map(response => response.json()); 
  }
  public getProductPerRoute(departamento: string, id: number) : Observable<Producto>{ 
    return this.getProducts(departamento)
                .map((producto: Producto[]) => producto.find(producto => producto.id === id));
  }
  public sendDataToServer(hero): Observable<Producto> { 
        const body = JSON.stringify(hero);
        const headers = new Headers({ });
        headers.append('Content-Type', 'application/json');
        return this._http.post(this.l+ 'productos/' + '.json',body,{ headers: headers}).map((data: Response) => data.json());
  } 
  public dl(producto : Producto){
    return this._http.delete(this.url + producto.departamento + '/' + (producto.id-1) + '.json').map((data: Response) => data.json());
  }
  public load(){ 
    return this._http.get(this.l+ 'productos' + '/.json').map(response => response.json());
  }
  public getDepartaments ( ): Departamento[]{
    return this.departamentosQuerySet;
  }
}