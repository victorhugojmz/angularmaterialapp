import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router} from '@angular/router';
class Departmento { 
   nombre: string;
   id: number;
   imagenes: string[];
}
@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {
  deps: Departmento;
  constructor(private _productsService : ProductsService , private router: Router) { }
  ngOnInit() {
    this.getdps();
  }
  public getdps( ){
      this._productsService.getDepartments().subscribe(deps => this.deps = deps); 
  }
  public OnSelect(dep){
      this.router.navigate(['/departamentos', dep.nombre]);
  }
}