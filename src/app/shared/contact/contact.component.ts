import { Component, OnInit } from '@angular/core';
import { Producto, FormsService, Contacto  } from '../../products';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  viewProviders: [ FormsService ]
})
export class ContactComponent implements OnInit {
  model =  new Contacto('Victor','Mexico','I love this website');
  paises: any;
  submitted: boolean;
  onSubmit() { this.submitted = true; }
  constructor(private _formsService: FormsService) {
    this.submitted  = false;
   }
  ngOnInit() {
    this.getCountries();
  }
  public nuevoMensaje( ){
    this.model = new Contacto('','','');
  }
   getCountries( ){ 
    this._formsService.getCountries()
        .subscribe(paises => this.paises = paises);
  }
}