import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent }  from './details/details.component';
import { DepartamentodetailsComponent } from './departamentodetails/departamentodetails.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { ContactComponent } from '../shared/contact/contact.component';
import { AboutComponent } from '../shared/about.component';

const productRoutes: Routes = [
  { path: 'productos'}
  { path: 'productos/:id', component: DetailsComponent },
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
