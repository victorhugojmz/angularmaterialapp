import { Component, OnInit } from '@angular/core';
import { Producto , ProductsService} from '../../products';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  productos:  Producto[ ];
  loading: boolean;
  constructor(private _productsService : ProductsService) { 
    this.loading = true;
  }
  ngOnInit() {
    this.getProductos();
  }
  public getProductos() { 
      this._productsService.getProducts()
                           .subscribe(
                             productos => this.productos = productos,
                             null,
                             ()=> this.loading = false
                             );
  }
}
