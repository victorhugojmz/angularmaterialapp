import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {Observable, Observer } from 'rxjs/RX'; 

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 }) 
 export class AppComponent implements OnInit{
   links: string[];
   constructor(){ 
     this.links = ["productos","departamentos"];
   }
   ngOnInit(){  
   }
  }
