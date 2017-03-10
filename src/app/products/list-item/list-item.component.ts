import { Component, OnInit, Input } from '@angular/core';
import { Producto }  from '../../products';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input('product-data') public producto: Producto;
  constructor( private _router : Router) { }
  ngOnInit() {
  }
  public OnSelectedProduct(producto: Producto){
      this._router.navigate(['/departamentos/' + producto.departamento + '/', producto.id]);
  }
}