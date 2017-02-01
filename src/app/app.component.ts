import { Component } from '@angular/core';
import { UserService } from './user.service';
import { OnInit } from '@angular/core';
import {Observable, Observer } from 'rxjs/RX'; 

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
 }) 
 export class AppComponent implements OnInit{
   products: Object[];
   constructor( private _userService : UserService){ }
   ngOnInit(){  
     this.traerDatos();
   }
   public traerDatos( ) { 
    this._userService.getDatosUsuario()
                         .subscribe(
                              products => {
                                  this.products = products
                              }, 
                              null,
                              () => console.log("Succeeded"))
   }
   /*public pushit(name,f_name){ 
         this._userService.pushObject({name: name, f_name: f_name }).subscribe( 
               data => console.log(data),
               error => console.error(error) 
        )
   }*/
  }
