import { Component, OnInit, OnChanges } from '@angular/core';
import { Router,ActivatedRoute,Params} from '@angular/router';
import { ProductsService , Producto , departamentosQuerySet ,Departamento } from '../../products';
interface DepartamentView { 
  productos : Producto[];
  departamento:  Departamento;
} 
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
  data;
  constructor(private _ProductsService : ProductsService, private _router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.getDepartmentDetails();
  }
  /*public getListOfProducts(_hasfilter?: string): void {
        this._ProductsService.getProducts(_hasfilter)
                              .subscribe(_listOfProducts => this.ListOfProducts = _listOfProducts);
  }
  public filterProductsPerDepartment(departmentSelected : string): void {
        this.ListOfProducts = null;
  }*/
  public OnSelectedProduct(producto: Producto){
      this._router.navigate(['/departamentos/' + producto.departamento + '/', producto.id]);
  }
  private getDepartmentDetails( ){
            this.route.params
                      .switchMap((params: Params) => this._ProductsService.getDepartment(params['nombre']))
                      .map((data)=> new Object({ departamento: data[0] , productos: data[1] }))
                      .subscribe(
                          (result: DepartamentView) => 
                                  { 
                                    this.departamento =  result.departamento,  
                                    this.ListOfProducts = result.productos 
                                  });
  }
}