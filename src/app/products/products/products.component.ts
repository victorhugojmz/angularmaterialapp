import { Component, OnInit } from '@angular/core';
import { ProductsService , Producto , departamentosQuerySet ,Departamento } from '../../products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public ListOfProducts: Producto[];
  public departamentos: Departamento[];
  public departamento: Departamento;
  constructor(private _ProductsService : ProductsService) { }
  ngOnInit() {
    this.getListOfProducts();
    this.getListOfDepartments();
  }
  public getListOfProducts(filterIfOptionSelected?: string): void {
        this._ProductsService.getProducts(filterIfOptionSelected)
                               .subscribe(_listOfProducts => this.ListOfProducts = _listOfProducts);
  }
  public filterProductsPerDepartment(valueFromOptionSelected : string): void{
        this.setDepartmentTorenderView(valueFromOptionSelected);
        this.getListOfProducts(valueFromOptionSelected);
        console.log(valueFromOptionSelected);
  }
   public setDepartmentTorenderView(deparmentNameToSet: string): void {
        this.departamento =  departamentosQuerySet.find((departamento: Departamento) => departamento.nombre === deparmentNameToSet);
  }
  public getListOfDepartments( ){
        this.departamentos =  this._ProductsService.getListOfDepartments();
  }
}