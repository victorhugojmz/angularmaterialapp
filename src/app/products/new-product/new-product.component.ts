import { Component, OnInit, Input } from '@angular/core';
import { Producto, Imagen, Spec, ProductsService } from '../../products';
import { FormGroup, FormBuilder,FormArray, Validators, FormControl } from '@angular/forms';
import { forbiddenNameValidator } from './validator';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  @Input() producto:Producto;
  public title: string;
  popUp: boolean;
  productoForm: FormGroup;
  departamentos: Array<string>;
  constructor(private _formBuilder: FormBuilder, private _productService: ProductsService) {
    this.departamentos = ["Men","Women","Kids","Baby"];
  }
  public createForm ( ): void  { 
        this.productoForm = this._formBuilder.group({
          sku: ['', Validators.required], 
          stock: ['', Validators.required],
          nombre: ['', [
              Validators.required,
              Validators.minLength(5),
              forbiddenNameValidator(/bob/i)
          ]],
          precio: ['', Validators.required],
          departamento: ['', Validators.required],
          descuento: [''],
          descripcion: [''],
          imagen: ['', Validators.required], 
          imagenes : this._formBuilder.array([],Validators.required),
          marca: ['', Validators.required],
          
          specs: this._formBuilder.array([], Validators.required)
        });
  }
  prepareProductToPost( ):  Producto{
     const formModel = this.productoForm.value;
     const imagenesDeepCopy : Imagen[] = formModel.imagenes.map(
       (imagen:  Imagen) => Object.assign({},imagen)
     );
     const specsDeepCopy:  Spec[] = formModel.specs.map(
       (spec: Spec)=> Object.assign({},spec)
      ); 
     const productoModel: Producto = {
          sku: formModel.sku as string,
          stock: formModel.stock as number, 
          nombre: formModel.nombre as string,
          precio: formModel.precio as number,
          departamento: formModel.departamento as string, 
          descuento : formModel.descuento as number,
          descripcion: formModel.detalles as string,
          imagen: formModel.imagen as string,
          imagenes: imagenesDeepCopy,
          marca: formModel.marca as string,
          specs:  specsDeepCopy,
     };
     return productoModel;
  }
 setImagenes(imagenes: Imagen[]): void {
     const  imagenesFormArray =  this._formBuilder.array(
                 imagenes.map(imagen => this._formBuilder.group(imagen))
     );
     this.productoForm.setControl('imagenes', imagenesFormArray);
  }
  setItemSpecs(specs: Spec[]):void {
      const specsFormArray = this._formBuilder.array(
                 specs.map((spec: Spec)=> this._formBuilder.group(spec))
      );  
      this.productoForm.setControl('specs', specsFormArray);
  }
   addNewImagenToArray():void {
    this.imagenes.push(this._formBuilder.group(new Imagen()));
  }
   addSpecToFormArray(): void {
    this.specs.push(this._formBuilder.group(new Spec()));
  }
   removeImagenSelectedFromArray(imagen: FormControl): void{
      this.imagenes.removeAt(this.imagenes.controls.indexOf(imagen));
  }
  rmSpecSelectedFromArray(spec: FormControl): void {
      this.specs.removeAt(this.specs.controls.indexOf(spec));
  }  
  get imagenes(): FormArray {
      return this.productoForm.get('imagenes') as FormArray;
  };
  get specs( ): FormArray {
      return this.productoForm.get('specs') as FormArray;
  }
   onSubmit(): void {
    this.prepareProductToPost();  
  }
   InitializeValuesIfProductExists(): void {
    this.productoForm.patchValue({
          nombre: this.producto.nombre,
          sku: this.producto.sku,
          stock: this.producto.stock,
          precio: this.producto.precio,
          departamento:  this.producto.departamento,
          descuento :  this.producto.descuento,
          descripcion: this.producto.descripcion,
          imagen: this.producto.imagen,
          marca: this.producto.marca
    });
    this.setImagenes(this.producto.imagenes);
    this.setItemSpecs(this.producto.specs);
  }
  ngOnInit() {
    this.createForm();
    if(this.producto){
        this.popUp = true;
        this.title = "Modificar Producto";
        this.InitializeValuesIfProductExists();
    }
    else{
      this.popUp = false;
      this.title = "Crear un nuevo producto";
    }
  }
  openForm(): void {
    this.popUp = false;
  }
}