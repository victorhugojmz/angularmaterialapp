import { Component, OnInit } from '@angular/core';
import { Producto } from '../../products';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  productos:  Producto[ ];
  producto =  new Producto(1,"28292282928292992",23,"Playera Nueva","$550","Calzado",10,"Esta muy bonito","https://ih0.redbubble.net/image.273964746.0759/ra,unisex_tshirt,x1000,charcoal_heather,front-c,235,200,225,294-bg,ffffff.u4.jpg","Angular",[{ imagenes: [ {imagen: "https://ih1.redbubble.net/image.240905556.4523/ra,unisex_tshirt,x2000,353d77:4d8b4ffd91,front-c,490,436,420,460-pad,420x460,f8f8f8.u1.jpg" },{ imagen: "https://ih1.redbubble.net/image.240905556.4523/ra,unisex_tshirt,x2000,353d77:4d8b4ffd91,front-c,490,436,420,460-pad,420x460,f8f8f8.u1.jpg"}]}]);
  constructor() { 
    this.productos = [ ];
  }
  ngOnInit() {
  }

}
