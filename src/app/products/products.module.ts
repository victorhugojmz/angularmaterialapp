import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ProductsRoutingModule } from './products.routing.module';
// Providers 
import { ProductsService } from './products.service';
import { LoaderComponent } from '../shared/loader/loader.component';
// Components
import { ProductsComponent } from './products/products.component';
import { ListItemComponent } from './list-item/list-item.component';
import { DetailsComponent } from './details/details.component';
import { ContactComponent } from '../shared/contact/contact.component';
import { AboutComponent } from '../shared/about.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { FilterPipe } from './filter.pipe';
import { SearchComponent } from './search/search.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ], 
  declarations: [
    ProductsComponent,    
    ListItemComponent,
    DetailsComponent,
    LoaderComponent,
    ContactComponent,
    AboutComponent,
    ParallaxComponent,
    FilterPipe,
    SearchComponent,
],
  providers: [ ProductsService ]
})
export class ProductsModule {}