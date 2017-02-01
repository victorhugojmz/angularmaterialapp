import { Component } from '@angular/core';
import { UserService } from './user.service';
import { OnInit } from '@angular/core';
import { User } from './user';

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
 }) 
 export class AppComponent implements OnInit{
   users;
   constructor( private _userService : UserService){
   }
   ngOnInit(){ 
     this.traerDatos();
   }
   public traerDatos( ){ 
        this._userService.getDatosUsuario()
                         .subscribe(
                              usersgotten => {
                                  this.users = usersgotten
                              }, 
                              null,
                              () => console.log("Succeeded")

                              );
   }
  }
