import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { DetailsComponent }  from './details/details.component';

const productRoutes: Routes = [
  { path: 'productos',  component: ProductsComponent },
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
