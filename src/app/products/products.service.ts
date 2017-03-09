import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, Response } from '@angular/http';
import { Producto , Departamento ,departamentosQuerySet } from '../products';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductsService { 
 private url = "https://productos-e9bd9.firebaseio.com/";
 private depto = "https://productos-e9bd9.firebaseio.com/departamentos.json";
 constructor(private _http:  Http){ }
  public getProducts(_hasfilter?: string): Observable<Producto[]> {
   return _hasfilter ? this._http.get(this.url + _hasfilter + '/.json').map(response =>  response.json()) : this._http.get(this.url + 'Clothing/.json').map(response => response.json()); 
  }
  public getProductPerRoute(departamento: string, id: number) : Observable<Producto>{ 
    return this.getProducts(departamento)
                .map((producto: Producto[]) => producto.find(producto => producto.id === id));
  }
 /* public sendDataToServer(hero): Observable<Producto> { 
        const body = JSON.stringify(hero);
        const headers = new Headers({ });
        headers.append('Content-Type', 'application/json');
        return this._http.po¡st(this.l+ 'productos/' + '.json',body,{ headers: headers}).map((data: Response) => data.json());
  }*/
  public getDepartaments( ): Observable<Departamento[]>{
      return this._http.get(this.depto).map((response: Response)=>response.json());
  }
  public getDepartment(nombre: string): Observable<Departamento> {
       return this.getDepartaments()
                  .map((departamento: Departamento[]) => departamento.find((departamento:Departamento)=> departamento.nombre  === nombre));
 }
}