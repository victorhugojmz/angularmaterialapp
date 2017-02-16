import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ProductsService} from '../../products/products.service';
@Component({
  selector: 'app-complex-form',
  templateUrl: './complex-form.component.html',
  styleUrls: ['./complex-form.component.css']
})
export class ComplexFormComponent implements  OnInit {
  heroForm: FormGroup;
  hero: Hero;
  states = ['CA', 'MD', 'OH', 'VA'];
  constructor(private _productsService : ProductsService, private _formBuilder: FormBuilder) { }
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
  public onSubmit() {
    this._productsService.sendDataToServer(this.prepareSaveHero()).subscribe(data => console.log(data));
  }  
  private prepareSaveHero(): Hero  {
    const formModel = this.heroForm.value;
    const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
    (address: Address) => Object.assign({}, address)
    );
    const saveHero: Hero = {
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
  name = '';
  addresses: Address[];
}
export class Address {
  street = '';
  city   = '';
  state  = '';
  zip    = '';
}