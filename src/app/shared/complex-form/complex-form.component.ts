import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-complex-form',
  templateUrl: './complex-form.component.html',
  styleUrls: ['./complex-form.component.css']
})
export class ComplexFormComponent implements OnChanges {
  heroForm: FormGroup;
  hero: Hero;
  states = ['CA', 'MD', 'OH', 'VA'];
  constructor(private _formBuilder: FormBuilder) {
    this.createForm();
  }
  createForm(){
        this.heroForm = this._formBuilder.group({
        name: ['', Validators.required],
        secretLairs: this._formBuilder.array([]), 
        power: ['',Validators.required],
        sidekick: ['', Validators.required]
    });
  }
  setAddresses(addresses: Address[]) {
        const addressFGs = addresses.map(address => this._formBuilder.group(address));
        const addressFormArray = this._formBuilder.array(addressFGs);
        this.heroForm.setControl('secretLairs', addressFormArray);
   } 
   get secretLairs(): FormArray {
      return this.heroForm.get('secretLairs') as FormArray;
  };
  public addLair(){
      this.secretLairs.push(this._formBuilder.group(new Address()));
  }
  removeLair(address){
      let index  =  this.secretLairs.controls.indexOf(address);
      this.secretLairs.removeAt(index);
  }
  ngOnChanges( ){
      this.heroForm.reset({
          name: this.hero.name
      });
      this.setAddresses(this.hero.addresses);
  }
  public onSubmit() {
      this.hero = this.prepareSaveHero(); 
      console.log(this.hero);
  }  
  private revert() { 
    this.ngOnChanges(); 
  }
  private prepareSaveHero(): Hero  {
    const formModel = this.heroForm.value;
    const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
    (address: Address) => Object.assign({}, address)
    );
    const saveHero: Hero = {
      id: this.hero.id,
      name: formModel.name as string,
      addresses: secretLairsDeepCopy
    };
    return saveHero;
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