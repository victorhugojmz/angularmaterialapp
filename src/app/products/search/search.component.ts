import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'searchbox',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() update = new EventEmitter();
  constructor() { }
  ngOnInit() {
    this.update.emit('');
  }
}