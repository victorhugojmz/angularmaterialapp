import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  constructor() { }
  public seleccionar(): void {
    console.log("padre");
  }
  public eliminar($event): void {
    $event.stopPropagation();
    console.log("hijo");
  }
}
