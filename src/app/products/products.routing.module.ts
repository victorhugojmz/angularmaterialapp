import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { DetailsComponent }  from './details/details.component';
import { AboutComponent } from '../shared/about.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ContactComponent } from '../shared/contact/contact.component';
import { DepartmentComponent } from './department/department.component';
const productRoutes: Routes = [
  { path: 'departamentos', component: DepartmentComponent },
  { path: 'departamentos/:nombre', component: ProductsComponent },  
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