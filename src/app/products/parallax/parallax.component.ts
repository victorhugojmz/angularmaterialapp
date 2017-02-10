import { Component, OnInit , Input} from '@angular/core';
import { Departamento } from '../../products';
@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent implements OnInit {
  hero;
  nombre;
  constructor() {
    this.hero = "http://hoosierhomemade.com/wp-content/uploads/Walmart-Electronics-Project-Reboot.jpg"; 
    this.nombre = "Electronics"; 
  }
  ngOnInit() {
  }

}