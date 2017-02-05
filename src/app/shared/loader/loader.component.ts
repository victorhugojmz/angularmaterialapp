import { Component, OnInit, Input, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {
  constructor() { }
  ngOnInit() {
  }
  ngOnDestroy(){
  }
}