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
  constructor(private _productsService: ProductsService, private router : Router) { }
  public ngOnInit() {
    this.getListOfDepartments();
  }                                             
  public OnSelectedDepartment(departamento: string) {
    this.router.navigate(['/departamentos/' + departamento]);
  }                               
  private getListOfDepartments(){
    this._productsService.getDepartaments()
                         .subscribe(departamentos => this.departamentos = departamentos);
  }               
}