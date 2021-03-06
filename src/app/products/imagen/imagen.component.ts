import { Component, OnInit, Input, OnChanges} from '@angular/core';
import { Imagen } from '../../products';
@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent   {
  @Input('imagen-data') public imagenes: Imagen[];
  @Input('imagen') public img : string;
  constructor() { }
  public OnImageSelected(imagen: Imagen){ 
      this.img = imagen.url;  
  }
}