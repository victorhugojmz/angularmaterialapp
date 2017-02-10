import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { ProductsService, Departamento , Producto} from '../../products';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dept-details',
  templateUrl: './departamentodetails.component.html',
  styleUrls: ['./departamentodetails.component.css']
})
export class DepartamentodetailsComponent implements OnInit {
  departamento;
  productos: Producto[];
  constructor(private route: ActivatedRoute, private _ProductsService: ProductsService, private router: Router) { }
  ngOnInit() {
       this.getDepartament();
       this.getProductsRelatedtoDepartment();
  }
  public getProductsRelatedtoDepartment(){
    this.route.params.switchMap((params: Params) =>  this._ProductsService.getexactData(params['nombre']))
                     .subscribe(productos => this.productos = productos);
  }
  private getDepartament(){
      this.route.params.switchMap((params: Params) => this._ProductsService.getDept(params['nombre']))
                       .subscribe(
                               departamento => this.departamento = departamento
                             );
  }
  public getFileredValue(brand){
     this._ProductsService.getProducts()
  }
}
