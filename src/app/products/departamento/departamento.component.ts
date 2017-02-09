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
  loading: boolean;
  constructor(private _productsService : ProductsService , private router: Router) { 
    this.loading = true;
  }
  ngOnInit() {
      this.getdps();
  }
  public getdps( ){
      this._productsService.getDepartments().subscribe(
                              departamentos => this.departamentos = departamentos,
                              err =>  console.error(err),
                              () => this.loading = false 
                              ); 
  }
  public OnSelect(dep){
      this.router.navigate(['/departamentos', dep.nombre]);
  }
}