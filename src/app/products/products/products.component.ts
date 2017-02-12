import { Component, OnInit } from '@angular/core';
import { Producto } from '../../products';
import { ProductsService } from '../products.service';
import { FilterPipe } from '../filter.pipe';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers : [ ProductsService ],
})
export class ProductsComponent implements OnInit {
  ListOfProducts: Producto[]
  constructor(private _ProductsService : ProductsService) { }
  ngOnInit() {
      this.getListOfProducts();
  }
  public getListOfProducts( ): void {
          this._ProductsService.getProducts( )
                               .subscribe(_listOfProducts => this.ListOfProducts = _listOfProducts);
  }
}