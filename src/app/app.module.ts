/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* Route Module */
import { RoutesModule } from './routes';

//Componentes
import { AppComponent } from './app.component';
  //Shared
import { HomeComponent } from './shared/home/home.component';
import { NotFoundComponent } from './shared/notfound.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
  //Products
import { ProductsComponent } from './products/products.component';
import { ListItemComponent } from './products/list-item.component';
import { ListComponent } from './products/list.component';


@NgModule({
declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ProductsComponent,
    ListItemComponent,
    ListComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutesModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }