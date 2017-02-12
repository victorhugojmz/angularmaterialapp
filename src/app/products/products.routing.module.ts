import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* Components */
import { ProductsComponent } from './products/products.component';
import { DetailsComponent }  from './details/details.component';
import { ContactComponent } from '../shared/contact/contact.component';
import { AboutComponent } from '../shared/about.component';
const productRoutes: Routes = [
  { path: 'productos', component:  ProductsComponent},
  { path: 'productos/:id',component: DetailsComponent},
  { path: 'contacto', component:  ContactComponent}, 
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
