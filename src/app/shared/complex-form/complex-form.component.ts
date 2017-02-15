import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-complex-form',
  templateUrl: './complex-form.component.html',
  styleUrls: ['./complex-form.component.css']
})
export class ComplexFormComponent implements OnInit {
  heroForm: FormGroup;
  states = ['CA', 'MD', 'OH', 'VA'];
 /* heroForm = new FormGroup({
    name: new FormControl()
  });*/
  constructor(private _formBuilder: FormBuilder) {
    this.createForm();
  }
  createForm( ){
    this.heroForm = this._formBuilder.group({
      name: ['', Validators.required],
      address: this._formBuilder.group({
          street: '', 
          city: '',
          state: '',
          zip: '', 
      }),
      power: '', 
      sidekick: ''
    });  
  }
  ngOnInit() {
  }

}
export class Hero {
  id = 0;
  name = '';
  addresses: Address[];
}

export class Address {
  street = '';
  city   = '';
  state  = '';
  zip    = '';
}
export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Whirlwind',
    addresses: [
      {street: '123 Main',  city: 'Anywhere', state: 'CA',  zip: '94801'},
      {street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226'},
    ]
  },
  {
    id: 2,
    name: 'Bombastic',
    addresses: [
      {street: '789 Elm',  city: 'Smallville', state: 'OH',  zip: '04501'},
    ]
  },
  {
    id: 3,
    name: 'Magneta',
    addresses: [ ]
  },
];
const states = ['CA', 'MD', 'OH', 'VA'];