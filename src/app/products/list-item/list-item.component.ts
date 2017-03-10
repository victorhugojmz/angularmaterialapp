import { Component, OnInit, Input } from '@angular/core';
import { Producto }  from '../../products';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input('product-data') public producto: Producto;
  constructor() { }
  ngOnInit() {
  }
}