import { Component, OnInit } from '@angular/core';
import { Producto } from '../../products';
export class Contacto {
  constructor(
    public nombre: string,
    public pais: string,
    public mensaje: string
  ) {  }
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  model =  new Contacto('Victor','Mexico','I love this website');
  paises: string[] = ["Mexico","USA","Canada","Argentina","Chile"];
  submitted: boolean;
  onSubmit() { this.submitted = true; }
  constructor() {
    this.submitted  = false;
   }
  ngOnInit() {
  }
  public newHero(){
    this.model = new Contacto('','','');
  }
}