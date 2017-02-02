import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router ,Params } from '@angular/router';
import { Producto } from '../../products';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  producto;
  constructor( private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
  }
}
