import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
/* Componentes */
import { AppComponent } from './app.component';
const appRoutes: Routes = [
  { path: '',  component:  HomeComponent },
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutesModule {

}
