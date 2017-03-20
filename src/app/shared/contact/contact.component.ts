import { Component, OnInit } from '@angular/core';
import { Producto, FormsService } from '../../products';
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
  private paises: string[];
  private submitted: boolean;
  onSubmit() { this.submitted = true; }
  constructor(private _formsService: FormsService) {
    this.submitted  = false;
   }
  ngOnInit() {
    this.getCountries();
  }
  public newHero(){
    this.model = new Contacto('','','');
  }
  private getCountries( ){ 
    this._formsService.getCountries()
        .map(pais => pais.name)
        .subscribe(paises => this.paises = paises);
  }
}