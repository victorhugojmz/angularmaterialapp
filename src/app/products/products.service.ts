import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Producto , Departamento } from '../products';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductsService { 
 constructor(private _http:  Http){ 
  }
  private url = "https://dtt-rest-api.firebaseio.com/.json";
  private _url = "https://ngdevapi.firebaseio.com/departamentos/.json";
  public getProducts(): Observable<Producto[]> {
      return this._http.get(this.url)
                       .map(response =>  response.json());
  }
  public getProduct(id) : Observable<Producto>{ 
     return this.getProducts()
                .map((producto: Producto[]) => producto.find(producto => producto.id === id));
  }
  public getDepartments( ){
      return this._http.get(this._url)
                       .map(response => response.json());
  }
  public getDept(nombre){ 
     return this.getDepartments()
                .map((departamentos: Departamento[]) => departamentos.find(depto => depto.nombre === nombre));
  }
  public get ListOfProductsFromDepartment(nombre) {
        return this.getProducts()
                   .map((productos: Producto[]) => productos
                   .filter(producto => producto.departamento == nombre));
      }
}