import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { NotFoundComponent } from './shared/notfound.component';
import { ContactComponent } from './shared/contact/contact.component';
import { AboutComponent } from './shared/about.component';
/* Componentes */
import { AppComponent } from './app.component';
 const appRoutes: Routes = [
  { path: '',  component:  HomeComponent },
  { path: '**', component: NotFoundComponent}
 ];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutesModule { }
