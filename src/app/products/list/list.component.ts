import { Component, OnInit } from '@angular/core';
import { Producto } from '../../products';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  productos:  Producto[ ];
  constructor(private _productsService : ProductsService) { 
  }
  ngOnInit() {
    this.getProductos();
  }
  public getProductos() { 
      this._productsService.getProducts().subscribe(productos => this.productos = productos);
  }
}
