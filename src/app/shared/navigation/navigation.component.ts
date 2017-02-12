import { Component, OnInit, Input } from '@angular/core';
import { NavigationRoutes } from '../../navigation-routes'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() navigationRoutes : Object[];
  constructor() { }
  ngOnInit() {
    this.navigationRoutes = NavigationRoutes;
  }

}
