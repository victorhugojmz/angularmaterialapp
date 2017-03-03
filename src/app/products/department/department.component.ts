import { Component, OnInit } from '@angular/core';
import { ProductsService, Departamento, departamentosQuerySet} from '../../products';
import { Router } from '@angular/router';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  public departamentos: Departamento[];
  constructor(private _productsService: ProductsService, private router : Router) { }
  ngOnInit(): void {
      this.departamentos = departamentosQuerySet;
  }                                             
  public OnSelectedDepartment(departamento: Departamento) {
    this.router.navigate(['/departamentos' + '/' + departamento.nombre]);
  }                                               
}