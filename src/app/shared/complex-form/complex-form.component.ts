import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-complex-form',
  templateUrl: './complex-form.component.html',
  styleUrls: ['./complex-form.component.css']
})
export class ComplexFormComponent implements OnInit , OnChanges{
  heroForm: FormGroup;
  hero: Hero;
  states = ['CA', 'MD', 'OH', 'VA'];
  constructor(private _formBuilder: FormBuilder) {
    this.createForm();
  }
  /*
  Second Version------
  createForm( ){
     this.heroForm = this._formBuilder.group({
      name: ['', Validators.required],
      address: this._formBuilder.group(new Address()),
      power: ['', Validators.required], 
      sidekick: ['', Validators.required]
    });  
   }
   */
 /* 
 First Version
 createForm( ){
    this.heroForm = this._formBuilder.group({
      name: ['', Validators.required],
      address: this._formBuilder.group({
          street: '', 
          city: '',
          state: '',
          zip: '', 
      }),
      power: ['', Validators.required], 
      sidekick: ['', Validators.required]
    });  
  }*/
  ngOnInit() {
  }
  ngOnChanges() {
    this.heroForm.reset({
      name:    this.hero.name,
      address: this.hero.addresses[0] || new Address()
    });
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