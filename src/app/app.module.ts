/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ProductsModule } from './products/products.module';
import { MaterialModule } from '@angular/material';

/* Route Module */
import { RoutesModule } from './routes';
//Componentes
import { AppComponent } from './app.component';
  //Shared
import { HomeComponent } from './shared/home/home.component';
import { NotFoundComponent } from './shared/notfound.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FooterComponent } from './shared/footer/footer.component'
import 'hammerjs';
@NgModule({
declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpModule,
    ProductsModule,
    RoutesModule, 
    MaterialModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }