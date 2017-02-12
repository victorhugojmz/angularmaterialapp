import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { ProductsService, Producto } from '../../products';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit , OnDestroy {
  private producto: Producto;
  private subscription;
  constructor( private route: ActivatedRoute, private _ProductsService: ProductsService, private router: Router) { }
  ngOnInit() {
    this.getProductFromRouteParams();
  }
  ngOnDestroy( ){  
    this.subscription.unsubscribe();
  }
  private getProductFromRouteParams( ){
    this.subscription =  this.route.params
                             .switchMap((params: Params) => this._ProductsService.getProductPerRoute(+params['id']))
                             .subscribe(producto => this.producto = producto); 
  }
}
