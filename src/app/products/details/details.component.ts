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
  private producto: Producto;
  private subscription;
  private update: boolean;
  constructor( private route: ActivatedRoute, private _ProductsService: ProductsService, private router: Router) {
     this.update = false;
  }
  public updateProduct(){
      this.update = !this.update;  
  }
  ngOnInit() {
    this.getProductFromRouteParams();
  }
  ngOnDestroy( ){  
    this.subscription.unsubscribe();
  }
  private getProductFromRouteParams(): void{
    this.subscription =  this.route.params
                             .switchMap((params: Params) => this._ProductsService.getProductPerRoute(params['departamento'],+params['id']))
                             .subscribe((producto: Producto) => this.producto = producto); 
  }
}
