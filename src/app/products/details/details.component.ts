import { Component, OnInit,  HostBinding, OnDestroy} from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { ProductsService, Producto, slideInDownAnimation } from '../../products';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  viewProviders: [ ProductsService ],
  animations: [ slideInDownAnimation ]
})
export class DetailsComponent implements OnInit , OnDestroy {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  producto: Producto;
  subscription;
  update: boolean;
  constructor( private route: ActivatedRoute, private _ProductsService: ProductsService, private router: Router) {
     this.update = false;
  }
  public updateProduct(){
      this.update = !this.update;   
  }
  public ngOnInit() {
    this.getProductFromRouteParams();
  }
  public ngOnDestroy( ){  
    this.subscription.unsubscribe();
  }
  getProductFromRouteParams() {
    this.subscription =  this.route.params
                             .switchMap((params: Params) => this._ProductsService.getProductPerRoute(params['nombre'],+params['id']))
                             .subscribe((producto: Producto) => this.producto = producto); 
  }
}
