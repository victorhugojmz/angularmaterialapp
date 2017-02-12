import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../products';
import { Router} from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() producto: Producto;
  constructor(private router: Router) { }
  ngOnInit() { }
  public OnSelectedProductToGeDetails(producto: Producto): void{
      this.router.navigate(['/productos'], producto.id)
  }
}
