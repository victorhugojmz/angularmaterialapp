import { Component, OnInit , Input} from '@angular/core';
import { Departamento } from '../../products';
@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent implements OnInit {
  departamento:  Departamento;
  constructor() {
    this.departamento.hero = "http://hoosierhomemade.com/wp-content/uploads/Walmart-Electronics-Project-Reboot.jpg"; 
    this.departamento.nombre = "Electronics"; 
  }
  ngOnInit() {
  }

}