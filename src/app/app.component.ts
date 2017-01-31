import { Component } from '@angular/core';
import { UserService } from './user.service';
import { OnInit } from '@angular/core';
import 'rxjs/RX';

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]

 }) 
 export class AppComponent implements OnInit{
   texto: string;
   users: string[ ];
   constructor(private _userservice :  UserService){
   }
   ngOnInit(){ 
    this._userservice.getUsersData()
   }
  }
