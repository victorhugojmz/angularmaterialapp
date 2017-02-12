import { Component, OnInit } from '@angular/core';
import { Producto, departamentosQuerySet ,Departamento } from '../../products';
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
  departamento: Departamento;
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
        this.ListOfProducts = [];
        this.getListOfProducts(valueFromOptionSelected);
  }
  private setDepartmentTorenderView(deparmentNameToSet: string): void {
        this.departamento = departamentosQuerySet.find((departamento: Departamento) => departamento.nombre === deparmentNameToSet);
  }
}