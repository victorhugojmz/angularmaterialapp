/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* Route Module */
import { RoutesModule } from './routes';

/* Components */
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { HomeComponent } from './home/home.component';

@NgModule({
declarations: [
    AppComponent,
    ItemComponent,
    HomeComponent
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