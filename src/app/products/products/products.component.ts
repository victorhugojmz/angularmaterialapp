import { Component, OnInit } from '@angular/core';
import { ProductsService , Producto , departamentosQuerySet ,Departamento } from '../../products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  viewProviders: [ProductsService]
})
export class ProductsComponent implements OnInit {
  public ListOfProducts: Producto[];
  public departamentos: Departamento[];
  public departamento: Departamento;
  constructor(private _ProductsService : ProductsService) { }
  ngOnInit() {
    this.getListOfProducts();
    this.departamentos = departamentosQuerySet;
  }
  public getListOfProducts(filter?): void {
        this._ProductsService.getProducts(filter)
                              .subscribe(_listOfProducts => this.ListOfProducts = _listOfProducts);
  }
  public filterProductsPerDepartment(valueFromOptionSelected : string): void {
        this.ListOfProducts = null;
        this.setDepartmentTorenderView(valueFromOptionSelected);
        this.getListOfProducts(valueFromOptionSelected);
  }
   public setDepartmentTorenderView(deparmentNameToSet: string): void {
        this.departamento = departamentosQuerySet.find((departamento: Departamento) => departamento.nombre === deparmentNameToSet);
  }
}