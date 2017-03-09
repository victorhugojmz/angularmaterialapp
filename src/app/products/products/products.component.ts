import { Component, OnInit, OnChanges } from '@angular/core';
import { Router,ActivatedRoute,Params} from '@angular/router';
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
  constructor(private _ProductsService : ProductsService, private _router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.getListOfProducts();
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
      this._router.navigate(['/productos'+ '/' + producto.departamento + '/', producto.id]);
  }  
  private getDepartmentDetails( ){
        this.route.params
                  .switchMap((params: Params) => this._ProductsService.getDepartment(params['nombre']))  
                  .subscribe((departamento)=> this.departamento =  departamento);  
  }
}