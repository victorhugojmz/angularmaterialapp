import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {Observable, Observer } from 'rxjs/RX'; 

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 }) 
 export class AppComponent implements OnInit{
   constructor(){ }
   ngOnInit(){  
   }
   /*public pushit(name,f_name){ 
         this._userService.pushObject({name: name, f_name: f_name }).subscribe( 
               data => console.log(data),
               error => console.error(error) 
        )
   }*/
  }
