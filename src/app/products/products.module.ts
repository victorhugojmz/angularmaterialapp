import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { ProductsRoutingModule } from './products.routing.module';
// Providers 
import { ProductsService } from './products.service';
import { LoaderComponent } from '../shared/loader/loader.component';
// Components
import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './details/details.component';
import { ContactComponent } from '../shared/contact/contact.component';
import { AboutComponent } from '../shared/about.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { FilterPipe } from './filter.pipe';
import { SearchComponent } from './search/search.component';
import { HighlightDirective } from './highlight.directive';
import { NewProductComponent } from './new-product/new-product.component';
import { DepartmentComponent } from './department/department.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ImagenComponent } from './imagen/imagen.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsRoutingModule
  ], 
  declarations: [
    ProductsComponent,    
    DetailsComponent,
    LoaderComponent,
    ContactComponent,
    AboutComponent,
    ParallaxComponent,
    FilterPipe,
    SearchComponent,
    HighlightDirective,
    NewProductComponent,
    DepartmentComponent,
    ListItemComponent,
    ImagenComponent
],
  providers: [ ProductsService ]
})
export class ProductsModule {}