import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* Components */
import { ProductsComponent } from './products/products.component';
import { DetailsComponent }  from './details/details.component';
import { AboutComponent } from '../shared/about.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ContactComponent } from '../shared/contact/contact.component';
const productRoutes: Routes = [
  { path: 'productos', component:  ProductsComponent },
  { path: 'productos/:departamento/:id',component: DetailsComponent },
  { path: 'new',component: NewProductComponent },
  { path: 'contacto', component: ContactComponent }, 
  { path: 'about', component: AboutComponent }
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