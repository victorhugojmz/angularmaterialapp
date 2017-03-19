import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, Response } from '@angular/http';
import { Producto , Departamento } from '../products';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductsService { 
 private url = "https://productos-e9bd9.firebaseio.com/";
 constructor(private _http:  Http){ }
  public getProducts(departamento: string): Observable<Producto[]> {
   return  this._http.get(this.url + departamento + '.json')
                     .map(response =>  response.json()); 
  }
  public getProductPerRoute(departamento: string, id: any) : Observable<Producto> { 
    return this.getProducts(departamento)
               .map((producto: Producto[]) => producto.find(producto => producto.id === id));
  }
  public getDepartaments( ): Observable<Departamento[]>{
      return this._http.get(this.url + 'departamentos.json')
                       .map((response: Response)=>response.json());
  }
  public getDepartment(nombreDepartamento: string): Observable<any> {
    let  departamento  = this.getDepartaments()
                             .map((departamento: Departamento[]) => departamento.find((departamento: Departamento) => departamento.nombre === nombreDepartamento));
    let productos =  this.getProducts(nombreDepartamento);
    return Observable.forkJoin(departamento,productos); 
  }
}