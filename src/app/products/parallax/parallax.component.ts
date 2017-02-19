import { Component,Input} from '@angular/core';
import { Departamento } from '../../products';
@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent{
  @Input('departamento-details') departamento:  Departamento;
  color = "lightgreen";
  constructor() {}
}