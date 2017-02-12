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
  constructor(private _ProductsService : ProductsService) { this.departamentos = departamentos;}
  ngOnInit() {
    this.getListOfProducts();
  }
  public getListOfProducts(filter?: string): void {
        this._ProductsService.getProducts(filter)
                               .subscribe(_listOfProducts => this.ListOfProducts = _listOfProducts);
  }
  public filterProductsPerDepartment(valueFromOptionSelected : string): void{
        this.ListOfProducts = [];
        this.getListOfProducts(valueFromOptionSelected);
  }
}