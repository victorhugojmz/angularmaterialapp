import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, Response } from '@angular/http';
import { Producto , Departamento ,departamentosQuerySet } from '../products';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductsService { 
 private url = "https://ngdevapi.firebaseio.com/";
 private api = "https://dtt-rest-api.firebaseio.com/.json";
 constructor(private _http:  Http){ }
  public getProducts(filter?): Observable<Producto[]> {
    return  filter ? this._http.get(this.url +  filter + '.json' ).map(response =>  response.json()) : this._http.get('https://dtt-rest-api.firebaseio.com/.json').map(response =>  response.json());   
  }
  public getProductPerRoute(id: number) : Observable<Producto>{ 
    return this.getProducts()
                .map((producto: Producto[]) => producto.find(producto => producto.id === id));
  }
  public getListOfDepartments( ): Departamento[]{ 
    return departamentosQuerySet; 
  }
  public sendDataToServer(hero){ 
        const body = JSON.stringify(hero);
        const headers = new Headers({ })
        headers.append('Content-Type', 'application/json');
        return this._http.post("https://dtt-rest-api.firebaseio.com/.json",body,{ headers: headers}).map((data: Response) => data.json());
  }
}