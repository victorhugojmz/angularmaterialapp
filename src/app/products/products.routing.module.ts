import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* Components */
import { ProductsComponent } from './products/products.component';
import { DetailsComponent }  from './details/details.component';
import { AboutComponent } from '../shared/about.component';
import { ComplexFormComponent } from '../shared/complex-form/complex-form.component';
import { NewProductComponent } from './new-product/new-product.component';
const productRoutes: Routes = [
  { path: 'productos', component:  ProductsComponent},
  { path: 'productos/:id',component: DetailsComponent},
  { path: 'new',component: NewProductComponent},
  { path: 'contacto', component: ComplexFormComponent}, 
  { path: 'about', component: AboutComponent}
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
