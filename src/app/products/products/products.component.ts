import { Component, OnInit, OnChanges } from '@angular/core';
import { Router} from '@angular/router';
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
  lol;
  constructor(private _ProductsService : ProductsService, private router: Router) { }
  ngOnInit() {
    this.getListOfProducts();
    this.departamentos = departamentosQuerySet;
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
  public OnSelectedProduct(producto: Producto){
      this.router.navigate(['/productos'+ '/' + producto.departamento + '/', producto.id]);
  }  
}