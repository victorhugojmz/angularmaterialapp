import { Component, OnInit } from '@angular/core';
import { Producto } from '../../products';
import { FormGroup, FormBuilder,FormArray, Validators } from '@angular/forms';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder){ }
  productoForm: FormGroup;
  public createForm ( ) { 
        this.productoForm = this._formBuilder.group({
          sku: ['', Validators.required], 
          stock: ['', Validators.required],
          nombre: ['', Validators.required],
          precio: ['', Validators.required],
          departamento: ['', Validators.required],
          descuento: [''],
          detalles: [''],
          imagen: ['', Validators.required]
        })
  }
  ngOnInit() {
  }

}