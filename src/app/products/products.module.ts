import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ProductsRoutingModule } from './products.routing.module';
// Components
import { ProductsComponent } from './products/products.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';

// Providers 
import { ProductsService } from './products.service';

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
    DetailsComponent
  ],
  providers: [ ProductsService ]
})
export class ProductsModule {}