import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { DetailsComponent }  from './details/details.component';
import { DepartamentodetailsComponent } from './departamentodetails/departamentodetails.component';
import { DepartamentoComponent } from './departamento/departamento.component';


const productRoutes: Routes = [
 /* { path: 'departamentos',  component: ProductsComponent },*/
  { path: 'productos',  component: ProductsComponent },
  { path: 'productos/:id', component: DetailsComponent },
  { path: 'departamentos', component: DepartamentoComponent },  
  { path: 'departamentos/:nombre', component: DepartamentodetailsComponent},
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
