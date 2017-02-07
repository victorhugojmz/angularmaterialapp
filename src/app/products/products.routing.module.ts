import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { DetailsComponent }  from './details/details.component';
import { DepartamentodetailsComponent } from './departamentodetails/departamentodetails.component';
import { DepartamentoComponent } from './departamento/departamento.component';


const productRoutes: Routes = [
  { path: 'departamentos', component: DepartamentoComponent },  
  { path: 'departamentos/:nombre', component: DepartamentodetailsComponent},
  { path: 'departamentos/:nombre/productos/:id', component: DetailsComponent },

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
