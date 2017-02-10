import { Component, OnInit } from '@angular/core';
import { ProductsService, Departamento } from '../../products';
import { Router} from '@angular/router';
@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {
  departamentos:  Departamento[];
  constructor(private _productsService : ProductsService , private router: Router) { }
  ngOnInit() {
      this.getEveryDepartmentToView();
  }
  public getEveryDepartmentToView( ){
      this._productsService.getDepartments( ).subscribe(
                              departamentos => this.departamentos = departamentos
                              ); 
  }
  public OnSelectedDepartment(departamento: Departamento){
      this.router.navigate(['/departamentos', departamento.nombre ]);
  }
}