import { Component, OnInit, OnChanges } from '@angular/core';
import { ProductsService , Producto , departamentosQuerySet ,Departamento } from '../../products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  viewProviders: [ProductsService]
})
export class ProductsComponent implements OnInit, OnChanges {
  public ListOfProducts: Producto[];
  public departamentos: Departamento[];
  public departamento: Departamento;
  lol;
  constructor(private _ProductsService : ProductsService) { }
  ngOnInit() {
    this.getListOfProducts();
    this.departamentos = departamentosQuerySet;
  }
  ngOnChanges(){
    this.eliminar(this.lol);
  }
  public getListOfProducts(_hasfilter?: string): void {
        this._ProductsService.getProducts(_hasfilter)
                              .subscribe(_listOfProducts => this.ListOfProducts = _listOfProducts);
  }
  public filterProductsPerDepartment(departmentSelected : string): void {
        this.ListOfProducts = null;
        this.setDepartmentTorenderView(departmentSelected);
        this.getListOfProducts(departmentSelected);
  }
   public setDepartmentTorenderView(deparmentNameToSet: string): void {
        this.departamento = departamentosQuerySet.find((departamento: Departamento) => departamento.nombre === deparmentNameToSet);
  }
   eliminar($event){
    let index = this.ListOfProducts.indexOf($event);
    this.ListOfProducts.splice(1,index);}
}