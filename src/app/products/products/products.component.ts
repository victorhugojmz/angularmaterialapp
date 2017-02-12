import { Component, OnInit } from '@angular/core';
import { ProductsService ,Producto, departamentosQuerySet ,Departamento } from '../../products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public ListOfProducts: Producto[];
  public departamentos: Departamento[];
  public depto: Departamento;
  constructor(private _ProductsService : ProductsService) { this.departamentos = departamentosQuerySet;}
  ngOnInit() {
    this.getListOfProducts();
  }
  public getListOfProducts(filterIfOptionSelected?: string): void {
        this._ProductsService.getProducts(filterIfOptionSelected)
                               .subscribe(_listOfProducts => this.ListOfProducts = _listOfProducts);
  }
  public filterProductsPerDepartment(valueFromOptionSelected : string): void{
        this.setDepartmentTorenderView(valueFromOptionSelected);
        this.getListOfProducts(valueFromOptionSelected);
  }
   public setDepartmentTorenderView(deparmentNameToSet: string): void {
     this.depto =  departamentosQuerySet.find((departamento: Departamento) => departamento.nombre === deparmentNameToSet);
  }
}