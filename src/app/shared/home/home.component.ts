import { Component, OnInit } from '@angular/core';
import { ProductsService, Departamento, departamentosQuerySet} from '../../products';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public departamentos: Departamento[];
  constructor(private _productsService: ProductsService) { }
  ngOnInit(): void {
      this.departamentos = departamentosQuerySet;
  }
}

