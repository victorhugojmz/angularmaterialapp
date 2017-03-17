import { Component, OnInit, OnChanges } from '@angular/core';
import { Router,ActivatedRoute,Params} from '@angular/router';
import { ProductsService , Producto , Departamento , DepartamentData } from '../../products';
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
  constructor(private _ProductsService : ProductsService, private route: ActivatedRoute) { }
  public ngOnInit() {
      this.getDepartmentDetails();
  }
  private getDepartmentDetails( ){
         this.route.params
                   .switchMap((params: Params) => this._ProductsService.getDepartment(params['nombre']))
                   .map((departmentData)=> new Object({ departamento: departmentData[0] , productos: departmentData[1] }))
                   .subscribe((result: DepartamentData) => { 
                                    this.departamento =  result.departamento,  
                                    this.ListOfProducts = result.productos 
                              });
  }
}  