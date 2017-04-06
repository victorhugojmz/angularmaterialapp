/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ProductsModule } from './products/products.module';
/* Route Module */
import { RoutesModule } from './routes';
//Componentes
import { AppComponent } from './app.component';
// Shared
import { NotFoundComponent } from './shared/notfound.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
@NgModule({
declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpModule,
    ProductsModule,
    RoutesModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }