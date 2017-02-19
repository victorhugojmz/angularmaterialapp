import { Component, Input, OnInit , Output, EventEmitter} from '@angular/core';
import { Producto } from '../../products';
import { Router} from '@angular/router';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() producto: Producto;
  @Output() delete = new EventEmitter();
  constructor(private router: Router) { }
  ngOnInit() { 
    this.delete.emit(null);
  }
  public OnSelectedProduct(producto: Producto){
      this.router.navigate(['/productos'+ '/' + producto.departamento + '/', producto.id]);
  }  
}