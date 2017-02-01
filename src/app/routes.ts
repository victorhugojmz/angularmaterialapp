import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { NotFoundComponent } from './shared/notfound.component';
import { ProductsComponent } from './products/products.component';
/* Componentes */
import { AppComponent } from './app.component';
const appRoutes: Routes = [
  { path: '',  component:  HomeComponent },
  { path: '**', component: NotFoundComponent},
  { path: 'products',component: ProductsComponent }
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
