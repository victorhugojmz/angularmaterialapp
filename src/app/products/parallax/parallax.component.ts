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
      this.hero = "https://static.pexels.com/photos/30222/pexels-photo-30222.jpg";
  }
}