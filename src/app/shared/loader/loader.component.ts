import { Component, OnInit, Input, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  @Input() is_loading: boolean;
  constructor() { }
  ngOnInit() {
    this.is_loading = true;
  }
  ngOnDestroy(){
    this.is_loading = false;
  }
}