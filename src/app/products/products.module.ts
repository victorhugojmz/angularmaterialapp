import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ProductsRoutingModule } from './products.routing.module';
// Components
import { ListItemComponent } from './list-item/list-item.component';
import { DetailsComponent } from './details/details.component';
import { DepartamentodetailsComponent } from './departamentodetails/departamentodetails.component';

// Providers 
import { ProductsService } from './products.service';
import { DepartamentoComponent } from './departamento/departamento.component';
import { LoaderComponent } from '../shared/loader/loader.component';
import { ContactComponent } from '../shared/contact/contact.component';
import { AboutComponent } from '../shared/about.component';
import { ParallaxComponent } from './parallax/parallax.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ], 
  declarations: [
    ListItemComponent,
    DetailsComponent,
    DepartamentodetailsComponent,
    DepartamentoComponent,
    LoaderComponent,
    ContactComponent,
    AboutComponent,
    ParallaxComponent
],
  providers: [ ProductsService ]
})
export class ProductsModule {}