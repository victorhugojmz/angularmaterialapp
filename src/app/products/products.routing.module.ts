import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { DetailsComponent }  from './details/details.component';
import { DepartamentodetailsComponent } from './departamentodetails/departamentodetails.component';


const productRoutes: Routes = [
  { path: 'departamentos',  component: ProductsComponent },
  { path: 'departamentos/:nombre', component: DepartamentodetailsComponent},
  { path: 'productos/:id', component: DetailsComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(productRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
