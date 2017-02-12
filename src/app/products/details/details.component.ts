import { Component, OnInit,  HostBinding, OnDestroy} from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { ProductsService, Producto, slideInDownAnimation } from '../../products';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  animations: [ slideInDownAnimation ]
})
export class DetailsComponent implements OnInit , OnDestroy {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
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
