import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../products';
import { Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() producto : Producto;
  constructor(private router: Router) { }
  ngOnInit() {
  }
  public OnSelect(producto: Producto){
      this.router.navigate(['/productos', producto.id]);
  }
}