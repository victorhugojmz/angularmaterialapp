import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data;
  constructor(private ps : ProductsService) 
  { }
  ngOnInit() {
    this.ps.load().subscribe(data  =>  console.log(data));
  }
}
