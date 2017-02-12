import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { ProductsService, Producto } from '../../products';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  producto: Producto;
  constructor( private route: ActivatedRoute, private _ProductsService: ProductsService, private router: Router) { }
  ngOnInit() {
    this.getProductFromRouteParams();
  }
  public getProductFromRouteParams( ){
         this.route.params
          .switchMap((params: Params) => this._ProductsService.getProductPerRoute(+params['id']))
          .subscribe(producto => this.producto = producto); 
  }
}
