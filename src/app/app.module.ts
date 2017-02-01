import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { UserService } from './user.service';
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
    MaterialModule.forRoot()
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }