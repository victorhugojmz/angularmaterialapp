import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { ProductsService } from '../products.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-departamentodetails',
  templateUrl: './departamentodetails.component.html',
  styleUrls: ['./departamentodetails.component.css']
})
export class DepartamentodetailsComponent implements OnInit {
  depto;
  constructor(private route: ActivatedRoute, private _ProductsService: ProductsService, private router: Router) { }
  ngOnInit() {
       this.route.params
          .switchMap((params: Params) => this._ProductsService.getDept(+params['nombre']))
          .subscribe(
            producto => this.depto= producto,
            error => console.log(error)    
          );
        console.log(this.depto)    
  }

}
