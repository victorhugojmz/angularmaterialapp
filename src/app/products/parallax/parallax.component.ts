import { Component, OnInit , Input} from '@angular/core';
import { Departamento } from '../../products';
@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent implements OnInit {
  @Input('departamento-details') departamento:  Departamento;
  color = "lightgreen";
  constructor() {}
  ngOnInit() { 
    this.departamento.hero = "http://winarticles.net/wp-content/uploads/2014/03/baby-grey-colored-eyes.jpg"
    this.departamento.descripcion =" blah blah blah";
  }
}