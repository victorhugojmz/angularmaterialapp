import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ProductsRoutingModule } from './products.routing.module';
// Components
import { ProductsComponent } from './products/products.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { DepartamentodetailsComponent } from './departamentodetails/departamentodetails.component';

// Providers 
import { ProductsService } from './products.service';
import { DepartamentoComponent } from './departamento/departamento.component';
import { LoaderComponent } from './Users/vicbarriosjimenez/Desktop/proyecto-angular/src/app/shared/loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ], 
  declarations: [
    ProductsComponent,
    ListComponent,
    ListItemComponent,
    DetailsComponent,
    DepartamentodetailsComponent,
    DepartamentoComponent,
    LoaderComponent
],
  providers: [ ProductsService ]
})
export class ProductsModule {}