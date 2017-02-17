import { Component, OnInit } from '@angular/core';
import { Producto, Imagen, Spec, ProductsService, departamentosList} from '../../products';
import { FormGroup, FormBuilder,FormArray, Validators, FormControl } from '@angular/forms';
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
  public createForm ( ): void  { 
        this.productoForm = this._formBuilder.group({
          sku: ['', Validators.required, Validators.minLength(15),Validators.maxLength(27)], 
          stock: ['', Validators.required],
          nombre: ['', Validators.required],
          precio: ['', Validators.required],
          departamento: ['', Validators.required],
          descuento: ['', Validators.required],
          detalles: [''],
          imagen: ['', Validators.required], 
          imagenes : this._formBuilder.array([],Validators.required),
          marca: ['', Validators.required],
          specs: this._formBuilder.array([], Validators.required)
        });
  }
  private prepareProductToPost( ):  Producto{
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
          detalles: formModel.detalles as string,
          imagen: formModel.imagen as string,
          imagenes: imagenesDeepCopy,
          marca: formModel.marca as string,
          specs:  specsDeepCopy,
     };
     return productoModel;
  }
  private setImagenes(imagenes: Imagen[]): void {
     const  imagenesFormArray =  this._formBuilder.array(
                 imagenes.map(imagen => this._formBuilder.group(imagen))
     );
     this.productoForm.setControl('imagenes', imagenesFormArray);
  }
  private setItemSpecs(specs: Spec[]):void {
      const specsFormArray = this._formBuilder.array(
                 specs.map((spec: Spec)=> this._formBuilder.group(spec))
      );  
  }
  private addNewImagenToArray():void {
    this.imagenes.push(this._formBuilder.group(new Imagen()));
  }
  private addSpecToFormArray(): void {
    this.specs.push(this._formBuilder.group(new Spec()));
  }
  private removeImagenSelectedFromArray(imagen: FormControl): void{
      this.imagenes.removeAt(this.imagenes.controls.indexOf(imagen));
  }
  private rmSpecSelectedFromArray(spec: FormControl): void {
      this.specs.removeAt(this.specs.controls.indexOf(spec));
  }  
  get imagenes(): FormArray {
      return this.productoForm.get('imagenes') as FormArray;
  };
  get specs( ): FormArray {
      return this.productoForm.get('specs') as FormArray;
  }
  private onSubmit(){
     this._productService.sendDataToServer(this.prepareProductToPost())
                         .subscribe(data => console.log(data));
  }
  ngOnInit() {
    this.createForm();
  }
}