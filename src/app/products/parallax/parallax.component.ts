import { Component, OnInit , Input} from '@angular/core';
import { Departamento } from '../../products';
@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent implements OnInit {
  hero: string;
  constructor() {}
  ngOnInit() {  
      this.hero = "http://www.myfashionlife.com/wp-content/uploads/2014/06/adidas-harrods.jpg";
  }

}