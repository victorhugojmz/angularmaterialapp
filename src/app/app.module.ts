import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SelectedDirective } from './selected.directive';
import { FiltroPipe } from './filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SelectedDirective,
    FiltroPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
