import { Component, OnInit } from '@angular/core';
import { Producto, Imagen, ProductsService, departamentosList} from '../../products';
import { FormGroup, FormBuilder,FormArray, Validators } from '@angular/forms';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  productoForm: FormGroup;
  departamentos: Array<string>;
  constructor(private _formBuilder: FormBuilder, private _productService: ProductsService) {
    this.departamentos = departamentosList;
   }
  public createForm ( ) { 
        this.productoForm = this._formBuilder.group({
          sku: ['', Validators.required], 
          stock: ['', Validators.required],
          nombre: ['', Validators.required],
          precio: ['', Validators.required],
          departamento: ['', Validators.required],
          descuento: [''],
          detalles: [''],
          imagen: ['', Validators.required], 
          imagenes : this._formBuilder.array([],Validators.required),
          marca: ['']
        });
  }
  private prepareProductToPost( ):  Producto{
     const formModel = this.productoForm.value;
     const productoModel: Producto = {
          sku: formModel.sku,
          stock: formModel.stock,
          nombre: formModel.nombre,
          precio: formModel.precio,
          departamento: formModel.departamento, 
          descuento : formModel.descuento,
          detalles: formModel.detalles,
          imagen: formModel.imagen,
          marca: formModel.marca
     };
     return productoModel;
  }
  private setImagenes(imagenes: Imagen[]){
     const  imagenesFormArray =  this._formBuilder.array(
               imagenes.map(imagen => this._formBuilder.group(imagen))
     );
     this.productoForm.setControl('imagenes', imagenesFormArray);
  }
  get imagenes(): FormArray {
      return this.productoForm.get('imagenes') as FormArray;
  };
  onSubmit(){
     this._productService.sendDataToServer(this.prepareProductToPost())
                         .subscribe(data => console.log(data));
  }
  ngOnInit() {
    this.createForm();
  }
}