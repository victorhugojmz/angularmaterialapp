/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* Route Module */
import { RoutesModule } from './routes';

/* Components */
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';
import { NotFoundComponent } from './shared/notfound.component';
import { ProductsComponent } from './products/products.component';
import { ListItemComponent } from './products/list-item.component';

@NgModule({
declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ProductsComponent,
    ListItemComponent
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