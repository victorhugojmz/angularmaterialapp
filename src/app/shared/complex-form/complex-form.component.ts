import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-complex-form',
  templateUrl: './complex-form.component.html',
  styleUrls: ['./complex-form.component.css']
})
export class ComplexFormComponent implements OnChanges, OnInit {
  heroForm: FormGroup;
  hero: Hero;
  states = ['CA', 'MD', 'OH', 'VA'];
  constructor(private _formBuilder: FormBuilder) { }
  ngOnInit(){
    this.createForm();
  }
  public createForm(){
        this.heroForm = this._formBuilder.group({
        name: ['', Validators.required],
        secretLairs: this._formBuilder.array([], Validators.required), 
        power: ['',Validators.required],
        sidekick: ['', Validators.required]
    });
  }
  private setAddresses(addresses: Address[]) {
        const addressFGs = addresses.map(address => this._formBuilder.group(address));
        const addressFormArray = this._formBuilder.array(addressFGs);
        this.heroForm.setControl('secretLairs', addressFormArray);
   } 
  public addLair(){
      this.secretLairs.push(this._formBuilder.group(new Address()));
  }
  private removeLair(address){
      this.secretLairs.removeAt(this.secretLairs.controls.indexOf(address));
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
  get secretLairs(): FormArray {
      return this.heroForm.get('secretLairs') as FormArray;
  };
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