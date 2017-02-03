import { Component, OnInit } from '@angular/core';
import { Producto } from '../../products'
import { ProductsService } from '../products.service';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  deps;
  constructor(private _productsService : ProductsService) { }
  ngOnInit() {
    this.getdps();
  }
   public getdps( ){
      this._productsService.getDepartments( ).subscribe(deps => this.deps = deps);
  }
}
