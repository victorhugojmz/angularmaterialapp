import { Component, OnInit, Input } from '@angular/core';
import { Producto, Imagen, Spec, ProductsService, departamentosList} from '../../products';
import { FormGroup, FormBuilder,FormArray, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  @Input() producto:Producto;
  title:string;
  productoForm: FormGroup;
  departamentos: Array<string>;
  constructor(private _formBuilder: FormBuilder, private _productService: ProductsService) {
    this.departamentos = departamentosList;
   }
  public createForm ( ): void  { 
        this.productoForm = this._formBuilder.group({
          sku: ['', Validators.required], 
          stock: ['', Validators.required],
          nombre: ['', Validators.required],
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
  private prepareProductToPost( ):  Producto{
     const formModel = this.productoForm.value;
     const imagenesDeepCopy : Imagen[] = formModel.imagenes.map(
       (imagen:  Imagen) => Object.assign({},imagen)
     );
     const specsDeepCopy:  Spec[] = formModel.specs.map(
       (spec: Spec)=> Object.assign({},spec)
      );
     const productoModel: Producto = {
          id: this.producto.id,
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
    console.log(this.prepareProductToPost());
  }
  private InitializeValuesIfProductExists(){
  this.productoForm.patchValue({
          nombre: this.producto.nombre,
          sku: this.producto.sku,
          stock: this.producto.stock,
          precio: this.producto.precio,
          departamento:  this.producto.departamento,
          descuento :  this.producto.descuento,
          descripcion: this.producto.descripcion,
          imagen: this.producto.imagen,
          imagenes: this.producto.imagenes[0] || new Imagen(),
          marca: this.producto.marca
    });
  }
  ngOnInit() {
    this.createForm();
    if(this.producto){
        this.title = "Modificar Producto"
        this.InitializeValuesIfProductExists();
    }
    else{
      this.title = "Crear un nuevo producto";
    }
  }
}