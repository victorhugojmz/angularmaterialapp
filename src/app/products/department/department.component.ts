import { Component, OnInit } from '@angular/core';
import { ProductsService, Departamento , Producto} from '../../products';
import { Router } from '@angular/router';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  public departamentos: Departamento[];
  data: any;
  constructor(private _productsService: ProductsService, private router : Router) { }
  public ngOnInit() {
    this.getListOfDepartments();
    this.lol();
  }                                             
  public OnSelectedDepartment(departamento: string) {
    this.router.navigate(['/departamentos/' + departamento]);
  }                        
  lol ( ){
    this._productsService.getProducts("Clothing")
        .map((producto: Producto[]) => producto.find((producto: Producto) =>  producto.id === 1))
        .subscribe(data => console.log(data));
  }        
  private getListOfDepartments(){
    this._productsService.getDepartaments().subscribe(departamentos => this.departamentos = departamentos);
  }               
}