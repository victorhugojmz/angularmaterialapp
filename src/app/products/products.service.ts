import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, Response } from '@angular/http';
import { Producto , Departamento } from '../products';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductsService { 
 private url = "https://productos-e9bd9.firebaseio.com/";
 private depto = "https://productos-e9bd9.firebaseio.com/departamentos.json";
 constructor(private _http:  Http){ }
  public getProducts(filter: string): Observable<Producto[]> {
   return  this._http.get(this.url + filter + '/.json').map(response =>  response.json()); 
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
  public getDepartment(nombreDepartamento: string) {
    let  departament  = this.getDepartaments().map((departamento: Departamento[]) => departamento.find((departamento: Departamento)=> departamento.nombre === nombreDepartamento ));
    let products =  this.getProducts(nombreDepartamento);
    return Observable.forkJoin(departament,products); 
  }
}