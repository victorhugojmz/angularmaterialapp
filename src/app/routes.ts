import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Componentes */
import { AppComponent } from './app.component';
const appRoutes: Routes = [
  { path: '',  component:  },
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
