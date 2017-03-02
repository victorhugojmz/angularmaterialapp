import { Component, OnInit } from '@angular/core';
import { Producto } from '../../products';
export class Hero {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {  }
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  powers = ['Really Smart','Super Flexible','Super Hot', 'Weather Changer'];
  model = new Hero(18,'Dr IQ',   this.powers[0], 'Chuck Overstreet');
  submitted  = false;
  onSubmit() { this.submitted = true; }
  constructor() { }
  ngOnInit() {
  }
  public newHero(){
    this.model = new Hero(42,'','');
  }
}