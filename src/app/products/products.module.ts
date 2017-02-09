import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ProductsRoutingModule } from './products.routing.module';
// Components
import { ListItemComponent } from './list-item/list-item.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { DepartamentodetailsComponent } from './departamentodetails/departamentodetails.component';

// Providers 
import { ProductsService } from './products.service';
import { DepartamentoComponent } from './departamento/departamento.component';
import { LoaderComponent } from '../shared/loader/loader.component';
import { ContactComponent } from './Users/vicbarriosjimenez/Desktop/proyecto-angular/src/app/shared/contact/contact.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ], 
  declarations: [
    ListComponent,
    ListItemComponent,
    DetailsComponent,
    DepartamentodetailsComponent,
    DepartamentoComponent,
    LoaderComponent,
    ContactComponent
],
  providers: [ ProductsService ]
})
export class ProductsModule {}