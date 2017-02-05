import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { Producto, ProductsService } from '../../products';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  producto: any;
  constructor(private route: ActivatedRoute, private _ProductsService: ProductsService, private router: Router) { }
  ngOnInit() {
       this.route.params.switchMap((params: Params) => this._ProductsService.getProduct(+params['id'])).subscribe( producto => this.producto = producto ); 
  }
}
