import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { ProductsService } from '../products.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dept-details',
  templateUrl: './departamentodetails.component.html',
  styleUrls: ['./departamentodetails.component.css']
})
export class DepartamentodetailsComponent implements OnInit {
  depto;
  constructor(private route: ActivatedRoute, private _ProductsService: ProductsService, private router: Router) { }
  ngOnInit() {
       this.route.params.switchMap((params: Params) => this._ProductsService.getDept(params['nombre'])).subscribe(depto => this.depto = depto, error => console.log(error));
  }
  onSelect(opt){
      this.router.navigate(['/departamentos' + '/' + opt.dep_nombre+ '/productos' +  '/', opt.id]);
  }
}
