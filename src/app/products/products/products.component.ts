import { Component, OnInit } from '@angular/core';
import { Producto, departamentos,Departamento } from '../../products';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers : [ ProductsService ],
})
export class ProductsComponent implements OnInit {
  ListOfProducts: Producto[];
  departamentos: Departamento[];
  constructor(private _ProductsService : ProductsService) {}
  ngOnInit() {
      this.getListOfProducts();
      this.departamentos = departamentos;
  }
  public getListOfProducts( ): void {
          this._ProductsService.getProducts( )
                               .subscribe(_listOfProducts => this.ListOfProducts = _listOfProducts);
  }
}