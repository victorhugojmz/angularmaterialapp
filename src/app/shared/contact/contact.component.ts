import { Component, OnInit } from '@angular/core';
import { Producto } from '../../products';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible','Super Hot', 'Weather Changer'];
  model = new Producto(1,"222k",3,"shirt",123,"clothing",.03,"lalalala","http:","Nike",[]);
  submitted  = false;
  onSubmit() { this.submitted = true; }
  constructor() { }
  ngOnInit() {
  }
}