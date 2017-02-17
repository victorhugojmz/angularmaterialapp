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
     const imagenesDeepCopy : Imagen[] = formModel.imagenes.map(
       (imagen:  Imagen) => Object.assign({},imagen)
     );
     const productoModel: Producto = {
          sku: formModel.sku as string,
          stock: formModel.stock as number, 
          nombre: formModel.nombre as string,
          precio: formModel.precio as number,
          departamento: formModel.departamento as string, 
          descuento : formModel.descuento as number,
          detalles: formModel.detalles as string,
          imagen: formModel.imagen as string,
          imagenes: imagenesDeepCopy,
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
  private addNewImagenToArray(){
    this.imagenes.push(this._formBuilder.group(new Imagen('','','')));
  }
  private removeImagenSelectedFromArray(imagen){
      this.imagenes.removeAt(this.imagenes.controls.indexOf(imagen));
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